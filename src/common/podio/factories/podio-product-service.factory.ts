import { HttpService } from '@nestjs/axios';
import { ExpaProduct } from 'src/signup/types';
import { PodioProductService } from '../podio-product.service';
import { PodioConfiguration } from '../podio.configuration';
import { PodioService } from '../podio.service';
import { PodioTokenService } from '../services/podio-token.service';

// TODO: Create a Proxy in order to mock podio calls for testing
export class PodioProductServiceFactory {
  static async initializeFor(
    product: ExpaProduct,
    configuration: PodioConfiguration,
    httpService: HttpService
  ): Promise<PodioProductService> {
    const { clientId, clientSecret } = configuration;
    const { appId, appToken } = configuration.getAppCredentials(product);
    const tokenService = await PodioTokenService.initializeFor(
      clientId,
      clientSecret,
      appId,
      appToken,
      httpService
    );
    const podioService = new PodioService(tokenService, httpService);

    return new PodioProductService(product, podioService);
  }
}
