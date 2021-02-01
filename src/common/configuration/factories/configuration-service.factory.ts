import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import { Logger } from '@nestjs/common';
import { ConfigurationService } from '../configuration.service';
import { ConfigurationModuleOptions } from '../interfaces/configuration-options.interface';

const isProduction = process.env.NODE_ENV === 'production';

export async function ConfigurationServiceFactory(
  client: SecretManagerServiceClient,
  options: ConfigurationModuleOptions
): Promise<ConfigurationService> {
  const logger = new Logger(this.name);
  if (!isProduction) {
    logger.log('Environment is not production. Using environment variables');
    return new ConfigurationService(process.env);
  }

  const { projectId, secretId } = options;
  const versionId = options.version ?? 'latest';
  const secretVersionName = `projects/${projectId}/secrets/${secretId}/versions/${versionId}`;

  logger.log(`Accessing secret manager version ${secretVersionName}`);

  const [version] = await client.accessSecretVersion({
    name: secretVersionName,
  });
  const payload = parsePayload(version?.payload?.data);
  return new ConfigurationService(payload);
}

function parsePayload(payload: any) {
  try {
    return JSON.parse(payload);
  } catch {
    return {};
  }
}
