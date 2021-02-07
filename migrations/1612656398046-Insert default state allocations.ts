import { ExpaEntitySeeds } from '../seeds/expa-entities.seed';
import { ProductsSeed } from '../seeds/products.seed';
import { StateAllocationSeeds } from '../seeds/state-allocations.seed';
import { State } from '../src/common/entities/state';
import { StateAllocation } from '../src/common/entities/state-allocation';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertDefaultStateAllocations1612656398046
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const connection = queryRunner.connection;

    const statesMap = createMap(
      await connection.getRepository(State).find(),
      'name'
    );
    const entitiesMap = createMap(ExpaEntitySeeds, 'name');
    const productsMap = createMap(ProductsSeed, 'shortName');

    const repository = connection.getRepository(StateAllocation);
    const allocations = StateAllocationSeeds.flatMap((seed) =>
      Object.entries(seed.productMapping).map(([product, entity]) =>
        repository.create({
          state: statesMap.get(seed.state),
          product: productsMap.get(product),
          entity: entitiesMap.get(entity),
        })
      )
    );

    await repository.save(allocations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(StateAllocation).delete({});
  }
}

function createMap<T>(array: T[], key: keyof T): Map<unknown, T> {
  return new Map(array.map((item) => [item[key], item]));
}
