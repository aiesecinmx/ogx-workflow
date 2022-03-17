import { Logger } from '@nestjs/common';
import qs from 'qs';
import { isPodioTokenResponse } from '../helpers/is-podio-token-response.helper';
import { PodioTokenResponse } from '../interfaces/podio-token-response.interface';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export class PodioTokenService {
  private readonly logger = new Logger(PodioTokenService.name);
  private readonly podioAuthUrl = 'https://podio.com/oauth/token'; // TODO: Extract to config?
  private readonly tokenStore = new Map<string, string>();

  constructor(
    private readonly clientId: string,
    private readonly clientSecret: string,
    public readonly appId: string,
    private readonly appToken: string,
    private readonly httpService: HttpService
  ) {}

  static async initializeFor(
    clientId: string,
    clientSecret: string,
    appId: string,
    appToken: string,
    httpService: HttpService
  ) {
    const service = new PodioTokenService(
      clientId,
      clientSecret,
      appId,
      appToken,
      httpService
    );
    await service.getAccessToken();
    return service;
  }

  async getAccessToken(): Promise<string> {
    if (this.tokenStore.has(ACCESS_TOKEN))
      return this.tokenStore.get(ACCESS_TOKEN);

    await this.retrieveTokens();
    return this.tokenStore.get(ACCESS_TOKEN);
  }

  async refreshToken(): Promise<string> {
    // TODO: Use endpoint to refresh token, instead of reauthenticating
    // Just re-authenticate for now
    await this.retrieveTokens();

    return this.tokenStore.get(ACCESS_TOKEN);
  }

  // TODO: Use in refresh logic
  private invalidateAccessToken() {
    this.tokenStore.delete(ACCESS_TOKEN);
  }

  private async retrieveTokens(): Promise<void> {
    this.logger.log(`Retrieving Podio Tokens for app id ${this.appId}`);

    let data;
    try {
      const response = await lastValueFrom(
        this.httpService.post<PodioTokenResponse>(
          this.podioAuthUrl,
          qs.stringify({
            grant_type: 'app',
            client_id: this.clientId,
            client_secret: this.clientSecret,
            app_id: this.appId,
            app_token: this.appToken,
          })
        )
      );
      ({ data } = response);
    } catch (error) {
      this.logger.error('Failed to retrieve token');
      throw error;
    }

    if (!isPodioTokenResponse(data)) {
      this.logger.error(data);
      throw new Error('Podio response did not match expected response');
    }

    this.logger.log('Setting token store with retrieved credentials');
    this.tokenStore.set(ACCESS_TOKEN, data.access_token);
    this.tokenStore.set(REFRESH_TOKEN, data.refresh_token);
  }
}
