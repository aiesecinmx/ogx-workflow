import {
  Body,
  Controller,
  Get,
  Logger,
  NotImplementedException,
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

  @Post('signups')
  // async createSignup(@Body(SignupPersonPipe) person: SignupPersonDto) {
  async createSignup(@Body() person: any) {
    this.logger.log('Got person');
    this.logger.log(person);
    throw new NotImplementedException();
    // const allocation = await this.allocationService.findByAllocationInfo(
    //   person.allocationInfo
    // );

    // return this.signupService.create(person, allocation);
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
