import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './common/configuration/configuration.module';
import { SignupModule } from './signup/signup.module';
import { TypeOrmOptionsService } from './typeorm/typeorm-configuration.service';
@Module({
  imports: [
    SignupModule,
    ConfigurationModule.forRoot({
      projectId: process.env.PROJECT_ID,
      secretId: process.env.SECRET_ID,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmOptionsService }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
