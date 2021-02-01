import { Injectable, Logger } from '@nestjs/common';
import { ExpaAuthService } from './expa/expa-auth.service';
import { SignupPersonDto } from '../common/interfaces/signup-person.interface';
import { Allocation } from 'src/common/entities/allocation';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from 'src/common/entities/person';

@Injectable()
export class SignupService {
  private readonly logger = new Logger(SignupService.name);
  constructor(
    @InjectRepository(Person)
    private readonly peopleRepository: Repository<Person>,
    private readonly authService: ExpaAuthService
  ) {}

  async create(person: SignupPersonDto, allocation: Allocation) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { allocationInfo, epInfo, ...signupPerson } = person;

    const { entity } = allocation;
    this.logger.log(
      `Allocating person into LC: ${entity.name} with EXPA id ${entity.expaId}`
    );
    const personToCreate = this.peopleRepository.create({
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      // referral // TODO
      mainProduct: allocation.product,
      allocation,
    });
    // TODO: Handle this as an upsert instead
    const createdPerson = await this.peopleRepository.save(personToCreate);

    await this.authService.registerSignup(signupPerson, entity.expaId);
    return createdPerson;
  }
}
