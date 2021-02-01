import { DynamicModule, Module } from '@nestjs/common';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import {
  CONFIGURATION_SERVICE_TOKEN,
  SECRET_MANAGER_CLIENT,
  SECRET_MANAGER_OPTIONS,
} from './constants';
import { ConfigurationModuleOptions } from './interfaces/configuration-options.interface';
import { ConfigurationServiceFactory } from './factories/configuration-service.factory';

@Module({})
export class ConfigurationModule {
  static forRoot(options: ConfigurationModuleOptions): DynamicModule {
    return {
      module: ConfigurationModule,
      global: true,
      providers: [
        {
          provide: CONFIGURATION_SERVICE_TOKEN,
          useFactory: ConfigurationServiceFactory,
          inject: [SECRET_MANAGER_CLIENT, SECRET_MANAGER_OPTIONS],
        },
        {
          provide: SECRET_MANAGER_OPTIONS,
          useValue: options,
        },
        {
          provide: SECRET_MANAGER_CLIENT,
          useValue: new SecretManagerServiceClient(),
        },
      ],
      exports: [CONFIGURATION_SERVICE_TOKEN],
    };
  }
}
