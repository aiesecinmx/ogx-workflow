import { PodioTokenResponse } from '../interfaces/podio-token-response.interface';

export function isPodioTokenResponse(
  response: any
): response is PodioTokenResponse {
  return 'access_token' in response && 'refresh_token' in response;
}
