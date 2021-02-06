import { Inject, Injectable } from '@nestjs/common';
import { ExpaProduct } from 'src/signup/types';
import { ConfigurationService } from '../configuration/configuration.service';
import { CONFIGURATION_SERVICE_TOKEN } from '../configuration/constants';

export interface AppCredentials {
  appId: string;
  appToken: string;
}

@Injectable()
export class PodioConfiguration {
  constructor(
    @Inject(CONFIGURATION_SERVICE_TOKEN)
    private readonly configuration: ConfigurationService
  ) {}

  get clientId() {
    return this.getConfigurationOrFail('podioClientId');
  }

  get clientSecret() {
    return this.getConfigurationOrFail('podioClientSecret');
  }

  getAppCredentials(product: ExpaProduct): AppCredentials {
    switch (product) {
      case ExpaProduct.GV:
        return this.getConfigurationOrFail<AppCredentials>('podioGVApp');
      case ExpaProduct.GTa:
        return this.getConfigurationOrFail<AppCredentials>('podioGTaApp');
      case ExpaProduct.GTe:
        return this.getConfigurationOrFail<AppCredentials>('podioGTeApp');
      default:
        throw new Error('Invalid product for Podio app configuration');
    }
  }

  private getConfigurationOrFail<T = string>(value: string) {
    const retrieved = this.configuration.get<T>(value);

    if (!retrieved) throw new Error(`Missing Podio Configuration: ${value}`);

    if (typeof retrieved !== 'string') return retrieved;

    try {
      return JSON.parse(retrieved);
    } catch {
      return retrieved;
    }
  }
}
