import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

async function bootstrap() {
  if (!isProduction) {
    Logger.log('Loading configuration from environment variables');
    require('dotenv/config');
  }

  const app = await NestFactory.create(AppModule, {
    logger: true,
  });
  app.enableCors();
  await app.listen(port);
}
bootstrap();
