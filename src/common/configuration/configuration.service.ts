import { Injectable } from '@nestjs/common';

type SecretPayload = Record<string, unknown>;

@Injectable()
export class ConfigurationService {
  constructor(private readonly secretPayload: SecretPayload) {}

  // TODO: Improve to support nested paths, not only top-level ones
  get<T>(value: string, defaultValue?: T): T {
    return (this.secretPayload[value] ?? defaultValue) as T;
  }
}
