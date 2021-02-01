import { Logger, UnprocessableEntityException } from '@nestjs/common';
import Axios, { AxiosInstance } from 'axios';
import { stringify } from 'querystring';
import { SignupPerson } from '../../common/interfaces/signup-person.interface';
import decamelize from 'decamelize';

export class ExpaAuthService {
  private readonly basePath = 'https://auth.aiesec.org/';
  private readonly logger = new Logger(ExpaAuthService.name);
  // TODO: Setup dinamically via configuration
  private readonly baseConfiguration: Record<string, any> = {
    country: 1589,
    countryCode: '+52',
    allowPhoneCommunication: true,
    allowEmailCommunication: true,
  };
  private readonly authClient: AxiosInstance;

  constructor() {
    this.logger.log(`Base path is ${this.basePath}`);
    this.authClient = Axios.create({
      baseURL: this.basePath,
    });
  }

  async emailExistsInExpa(email: string): Promise<boolean> {
    try {
      await this.authClient.post(
        '/registrations/check_user',
        stringify({ email })
      );
      return false;
    } catch {
      return true;
    }
  }

  async registerSignup(person: SignupPerson, lcId: number): Promise<unknown> {
    const { email } = person;
    const emailExists = await this.emailExistsInExpa(email);

    if (emailExists) {
      this.logger.warn(`Person exists: ${email}, skipping EXPA signup.`);
      return; // TODO: Return an error in processing queue?
    }

    this.logger.log(`Person does not exist. Signing up into EXPA`);
    const personToCreate = {
      ...person,
      lc: lcId,
      lcInput: lcId,
      ...this.baseConfiguration,
    };
    const entries = Object.entries(personToCreate).map(([key, value]) => [
      decamelize(key),
      value,
    ]);
    const adaptedUser = Object.fromEntries(entries);
    this.logger.log(adaptedUser);

    this.logger.log(`Sending request to EXPA`);
    const { data } = await this.authClient.post('/users.json', {
      utf: '✓',
      user: adaptedUser,
    });
    return data;
  }
}
