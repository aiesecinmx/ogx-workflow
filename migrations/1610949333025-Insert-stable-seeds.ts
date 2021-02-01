import { ExpaEntitySeeds } from '../seeds/expa-entities.seed';
import { ProductsSeed } from '../seeds/products.seed';
import { StatesSeed } from '../seeds/states.seed';
import { ExpaEntity } from '../src/common/entities/expa-entity';
import { Product } from '../src/common/entities/product';
import { State } from '../src/common/entities/state';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertStableSeeds1610949333025 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connect();
    await queryRunner.connection.getRepository(Product).save(ProductsSeed);
    await queryRunner.connection
      .getRepository(ExpaEntity)
      .save(ExpaEntitySeeds);
    await queryRunner.connection.getRepository(State).save(StatesSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connect();
    await queryRunner.connection.getRepository(State).delete({});
    await queryRunner.connection.getRepository(ExpaEntity).delete({});
    await queryRunner.connection.getRepository(Product).delete({});
  }
}
