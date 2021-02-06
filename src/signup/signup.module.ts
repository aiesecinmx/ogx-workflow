import { HttpModule, Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { ExpaAuthService } from 'src/signup/expa/expa-auth.service';
import { StateService } from './state/state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from 'src/common/entities/state';
import { CampusService } from './campus/campus.service';
import { Campus } from 'src/common/entities/campus';
import { AllocationService } from './allocation/allocation.service';
import { Allocation } from 'src/common/entities/allocation';
import { Person } from 'src/common/entities/person';
import { Product } from 'src/common/entities/product';
import { PodioModule } from 'src/common/podio/podio.module';

@Module({
  imports: [
    PodioModule,
    TypeOrmModule.forFeature([State, Campus, Allocation, Person, Product]),
  ],
  providers: [
    SignupService,
    ExpaAuthService,
    StateService,
    CampusService,
    AllocationService,
  ],
  controllers: [SignupController],
})
export class SignupModule {}
