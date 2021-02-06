import { HttpModule, HttpService, Module } from '@nestjs/common';
import { ExpaProduct } from 'src/signup/types';
import { ConfigurationModule } from '../configuration/configuration.module';
import {
  GTA_PODIO_CLIENT,
  GTE_PODIO_CLIENT,
  GV_PODIO_CLIENT,
} from './constants';
import { PodioProductServiceFactory } from './factories/podio-product-service.factory';
import { PodioConfiguration } from './podio.configuration';
import { PodioService } from './podio.service';
import { PodioTokenService } from './services/podio-token.service';

@Module({
  imports: [ConfigurationModule, HttpModule],
  providers: [
    PodioTokenService,
    PodioService,
    PodioConfiguration,
    {
      provide: GV_PODIO_CLIENT,
      useFactory: (
        configuration: PodioConfiguration,
        httpService: HttpService
      ) =>
        PodioProductServiceFactory.initializeFor(
          ExpaProduct.GV,
          configuration,
          httpService
        ),
      inject: [PodioConfiguration, HttpService],
    },
    {
      provide: GTA_PODIO_CLIENT,
      useFactory: (
        configuration: PodioConfiguration,
        httpService: HttpService
      ) =>
        PodioProductServiceFactory.initializeFor(
          ExpaProduct.GTa,
          configuration,
          httpService
        ),
      inject: [PodioConfiguration, HttpService],
    },
    {
      provide: GTE_PODIO_CLIENT,
      useFactory: (
        configuration: PodioConfiguration,
        httpService: HttpService
      ) =>
        PodioProductServiceFactory.initializeFor(
          ExpaProduct.GTe,
          configuration,
          httpService
        ),
      inject: [PodioConfiguration, HttpService],
    },
  ],
  exports: [GV_PODIO_CLIENT, GTA_PODIO_CLIENT, GTE_PODIO_CLIENT],
})
export class PodioModule {}
