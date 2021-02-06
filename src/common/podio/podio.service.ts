import { HttpService, HttpStatus, Injectable } from '@nestjs/common';
import { PodioTokenService } from './services/podio-token.service';

@Injectable()
export class PodioService {
  private readonly baseUrl = 'https://api.podio.com/';
  public readonly appId;

  constructor(
    private readonly tokenService: PodioTokenService,
    private readonly httpService: HttpService
  ) {
    this.appId = tokenService.appId;
  }

  // This could be handled with a retryable http client but left it here for simplicity
  async postWithToken(path: string, data: any) {
    try {
      await this.makePostRequest(path, data);
    } catch (error) {
      if (error.response.status === HttpStatus.UNAUTHORIZED) {
        await this.tokenService.refreshToken();
        await this.makePostRequest(path, data); // Retry once
      }
      throw error;
    }
  }

  private async makePostRequest(path: string, data: any) {
    return this.httpService
      .post(`${this.baseUrl}/${path}`, data, {
        headers: {
          Authorization: `OAuth2 ${await this.tokenService.getAccessToken()}`,
        },
      })
      .toPromise();
  }
}
