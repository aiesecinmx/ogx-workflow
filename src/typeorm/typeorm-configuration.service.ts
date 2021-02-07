import { Inject } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigurationService } from 'src/common/configuration/configuration.service';
import { CONFIGURATION_SERVICE_TOKEN } from 'src/common/configuration/constants';
import { Allocation } from 'src/common/entities/allocation';
import { Campus } from 'src/common/entities/campus';
import { ExpaEntity } from 'src/common/entities/expa-entity';
import { Person } from 'src/common/entities/person';
import { Product } from 'src/common/entities/product';
import { State } from 'src/common/entities/state';
import { StateAllocation } from 'src/common/entities/state-allocation';
import { University } from 'src/common/entities/university';
import { UniversityAllocation } from 'src/common/entities/university-allocation';

export class TypeOrmOptionsService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(CONFIGURATION_SERVICE_TOKEN)
    private readonly configuration: ConfigurationService
  ) {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      extra: {
        socketPath: this.configuration.get('dbSocketPath'),
      },
      host: this.configuration.get('dbHost'),
      port: this.configuration.get('dbPort', 3306),
      username: this.configuration.get('dbUser'),
      password: this.configuration.get('dbPassword'),
      database: this.configuration.get('dbName'),
      entities: [
        Allocation,
        StateAllocation,
        UniversityAllocation,
        Campus,
        State,
        ExpaEntity,
        Person,
        Product,
        University,
      ],
      synchronize: false,
      logging: true,
      cache: { duration: 3600000 },
    };
  }
}
