import { Inject, Injectable, Logger } from '@nestjs/common';
import { ExpaAuthService } from './expa/expa-auth.service';
import {
  SignupPerson,
  SignupPersonDto,
} from '../common/interfaces/signup-person.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from 'src/common/entities/person';
import { PodioProductService } from 'src/common/podio/podio-product.service';
import {
  GTA_PODIO_CLIENT,
  GTE_PODIO_CLIENT,
  GV_PODIO_CLIENT,
} from 'src/common/podio/constants';
import { ExpaProduct } from './types';
import { Allocation } from 'src/common/entities/allocation';

@Injectable()
export class SignupService {
  private readonly logger = new Logger(SignupService.name);
  constructor(
    @InjectRepository(Person)
    private readonly peopleRepository: Repository<Person>,
    private readonly authService: ExpaAuthService,
    @Inject(GV_PODIO_CLIENT)
    private readonly podioGvService: PodioProductService,
    @Inject(GTA_PODIO_CLIENT)
    private readonly podioGTaService: PodioProductService,
    @Inject(GTE_PODIO_CLIENT)
    private readonly podioGTeService: PodioProductService
  ) {}

  async create(person: SignupPersonDto, allocation: Allocation) {
    const { entity } = allocation;
    this.logger.log(
      `Allocating person into LC: ${entity.name} with EXPA id ${entity.expaId}`
    );
    const personToCreate = this.peopleRepository.create({
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      referral: person.referral,
      phone: person.phone,
      mainProduct: allocation.product,
      allocation,
      // TODO: Add SDG preference as well
    });
    // TODO: Handle this as an upsert instead
    const createdPerson = await this.peopleRepository.save(personToCreate);

    // TODO: Extract into events
    // Should we leave this as a floating promise?
    await Promise.all([
      // TODO: Add notes and product interested into expa
      this.authService.registerSignup(
        this.getExpaSignupObject(person),
        entity.expaId
      ),
      this.signUpToProduct(createdPerson, allocation.product.expaId),
    ]);

    return createdPerson;
  }

  // TODO: Extract into an event, and a more reusable logic. This is an awful code smell
  private signUpToProduct(person: Person, productId: number): Promise<void> {
    switch (productId) {
      case ExpaProduct.GV:
        this.logger.log('Signing up to GV Podio Workspace');
        return this.podioGvService.signupUser(person);
      case ExpaProduct.GTa:
        this.logger.log('Signing up to GTa Podio Workspace');
        return this.podioGTaService.signupUser(person);
      case ExpaProduct.GTe:
        this.logger.log('Signing up to GTe Podio Workspace');
        return this.podioGTeService.signupUser(person);
      default:
        throw new Error('Podio Workspace not found!');
    }
  }

  private getExpaSignupObject({
    firstName,
    lastName,
    email,
    password,
    phone,
  }: SignupPersonDto): SignupPerson {
    return { firstName, lastName, email, password, phone };
  }
}
