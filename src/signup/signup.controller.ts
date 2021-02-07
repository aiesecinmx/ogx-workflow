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
    this.logger.log(`Got signup request for person: ${deletePII(person)}`);
    const campus = person.allocation;
    const allocation = campus
      ? await this.allocationService.findByCampus(campus, product)
      : await this.allocationService.findDefaultAllocation(
          parseInt(person.state),
          product
        );

    if (!allocation) {
      const message = 'Allocation not found for the given parameters';
      this.logger.warn(message);
      throw new BadRequestException({ message, campus, product });
    }

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
}
