import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ExpaProduct } from 'src/signup/types';
import { Person } from '../entities/person';
import {
  PODIO_ENTITIES,
  PODIO_REFERRALS,
  PODIO_STATES,
  SignUpFieldsGTa,
  SignUpFieldsGTe,
  SignUpFieldsGV,
} from './constants';
import { CreatePodioUserDto } from './interfaces/create-podio-user.dto';
import { PodioService } from './podio.service';

@Injectable()
export class PodioProductService {
  private readonly logger = new Logger(PodioProductService.name);

  constructor(
    private readonly product: ExpaProduct,
    private readonly podioService: PodioService
  ) {}

  signupUser(user: Person) {
    const fields = this.createUserFields(user);
    const podioUserDto: CreatePodioUserDto = {
      external_id: user.id,
      fields,
    };

    this.logger.log('Inserting user into Podio');
    return this.podioService.postWithToken(
      `item/app/${this.podioService.appId}`,
      podioUserDto
    );
  }

  private createUserFields(user: Person) {
    const entityName = user.allocation?.entity?.name;
    const stateName = user.allocation?.campus?.state?.name;
    this.logger.log(
      `Creating signup person with entity ${entityName} and state ${stateName}`
    );
    switch (this.product) {
      case ExpaProduct.GV:
        return {
          [SignUpFieldsGV.firstName]: user.firstName,
          [SignUpFieldsGV.lastName]: user.lastName,
          [SignUpFieldsGV.email]: user.email,
          [SignUpFieldsGV.phone]: user.phone,
          [SignUpFieldsGV.entity]: entityName
            ? PODIO_ENTITIES[entityName]
            : undefined,
          [SignUpFieldsGV.state]: stateName
            ? PODIO_STATES[stateName]
            : undefined,
          [SignUpFieldsGV.referral]: PODIO_REFERRALS[user.referral],
        };
      case ExpaProduct.GTa:
        return {
          [SignUpFieldsGTa.firstName]: user.firstName,
          [SignUpFieldsGTa.lastName]: user.lastName,
          [SignUpFieldsGTa.email]: user.email,
          [SignUpFieldsGTa.phone]: user.phone,
          [SignUpFieldsGTa.entity]: entityName
            ? PODIO_ENTITIES[entityName]
            : undefined,
          [SignUpFieldsGTa.state]: stateName
            ? PODIO_STATES[stateName]
            : undefined,
          [SignUpFieldsGTa.referral]: PODIO_REFERRALS[user.referral],
        };
      case ExpaProduct.GTe:
        return {
          [SignUpFieldsGTe.firstName]: user.firstName,
          [SignUpFieldsGTe.lastName]: user.lastName,
          [SignUpFieldsGTe.email]: user.email,
          [SignUpFieldsGTe.phone]: user.phone,
          [SignUpFieldsGTe.entity]: entityName
            ? PODIO_ENTITIES[entityName]
            : undefined,
          [SignUpFieldsGTe.state]: stateName
            ? PODIO_STATES[stateName]
            : undefined,
          [SignUpFieldsGTe.referral]: PODIO_REFERRALS[user.referral],
        };
    }
  }
}
