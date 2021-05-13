import { StateAllocationSeedsV2 } from '../seeds/state-allocations-v2.seed';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuid } from 'uuid';

const effectiveStart = '2021-04-01 00:00:00';

export class AddExtraStateAllocations1617836134562
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const {
      state,
      denomination,
      productMapping,
    } of StateAllocationSeedsV2) {
      for (const [product, entity] of Object.entries(productMapping)) {
        await queryRunner.query(
          `INSERT INTO allocation (id,effectiveStart,denomination,productExpaId,entityExpaId,type,stateId)
          SELECT ?,?,?,p.expaId,e.expaId,'StateAllocation',s.id FROM state s,product p,expa_entity e WHERE s.name = ? AND p.shortName = ? AND e.name = ?`,
          [uuid(), effectiveStart, denomination, state, product, entity]
        );
      }
    }
  }

  public async down(): Promise<void> {
    // NO-OP
  }
}
