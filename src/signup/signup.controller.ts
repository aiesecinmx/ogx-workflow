import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { JoiValidationPipe } from '../common/pipes/joi-validation.pipe';
import { SignupPersonSchema } from './schema/signup-person.schema';
import { SignupService } from './signup.service';
import { StateService } from './state/state.service';
import { CampusService } from './campus/campus.service';
import { AllocationService } from './allocation/allocation.service';
import { SignupPersonDto } from 'src/common/interfaces/signup-person.interface';
import { ParseElementorPipe } from './pipes/parse-elementor.pipe';
import { deletePII } from 'src/common/helpers/delete-pii.helper';
import { StateDto } from './interfaces/state.dto';
import { validate as isUuid } from 'uuid';

const SignupPersonPipe = new JoiValidationPipe(SignupPersonSchema);

@Controller()
export class SignupController {
  private readonly logger = new Logger(SignupController.name);

  constructor(
    private readonly signupService: SignupService,
    private readonly stateService: StateService,
    private readonly campusService: CampusService,
    private readonly allocationService: AllocationService
  ) {}

  @Post(':product/signups')
  @HttpCode(HttpStatus.OK) /** Necessary for webhooks to work */
  async createSignup(
    @Param('product') product: string,
    @Body(ParseElementorPipe, SignupPersonPipe) person: SignupPersonDto
  ) {
    this.logger.log(
      `Got signup request for person: ${JSON.stringify(deletePII(person))}`
    );
    const campusField = person.allocation;
    const allocation = isUuid(campusField)
      ? await this.allocationService.findByCampus(campusField, product)
      : await this.allocationService.findDefaultAllocation(
          parseInt(person.state),
          product,
          campusField
        );

    if (!allocation) {
      const message = 'Active allocation not found for the given parameters';
      this.logger.warn(message);
      throw new BadRequestException({ message, campus: campusField, product });
    }
    this.logger.log(`Found allocation with id ${allocation.id}`);

    return this.signupService.create(person, allocation);
  }

  @Get('states')
  getStates() {
    return this.stateService.findAll();
  }

  @Get('states/:id/campuses')
  async getCampusesByState(@Param('id') stateId: string) {
    return this.campusService.findByStateId(stateId);
  }

  @Get('states/:id')
  async getStateInformation(@Param('id') stateId: string): Promise<StateDto> {
    return {
      id: stateId,
      campuses: await this.campusService.findByStateId(stateId),
      stateAllocations: await this.allocationService.listDefaultAllocations(
        stateId
      ),
    };
  }
}
