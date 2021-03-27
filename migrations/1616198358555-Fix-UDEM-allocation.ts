import { UpdateAllocationInstructions } from '../seeds/allocations2021-1-v2.seed';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuid } from 'uuid';

const effectiveEnd = '2021-02-01 00:00:00';
const effectiveStart = effectiveEnd;

export class FixUDEMAllocation1616198358555 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /** Alter Existing Campus Allocations */
    console.log('==== Step 1. Altering existing campus allocation ====');
    const mainUniversitiesToUpdate = UpdateAllocationInstructions.filter(
      ({ universityId }) => universityId
    ); // Just UDEM in this case, reusing the logic of the last allocation

    console.log('Deleting and adding universities main allocations');
    for (const { universityId, productMapping } of mainUniversitiesToUpdate) {
      for (const [product, lc] of Object.entries(productMapping)) {
        console.log(
          await queryRunner.query(
            `UPDATE allocation a JOIN campus c ON a.campusId = c.id AND c.universityId = ? AND c.isMainCampus = true SET effectiveEnd=? WHERE a.productExpaId = (SELECT expaId FROM product WHERE shortName = ?)`,
            [universityId, effectiveEnd, product]
          )
        );

        console.log(
          await queryRunner.query(
            `INSERT INTO allocation (id,campusId,productExpaId,entityExpaId,type,effectiveStart)
            SELECT ?,c.id,p.expaId,e.expaId,'UniversityAllocation',? FROM campus c,product p,expa_entity e WHERE c.universityId = ? AND c.isMainCampus = true AND p.shortName = ? AND e.name = ?`,
            [uuid(), effectiveStart, universityId, product, lc]
          )
        );
      }
    }
  }

  public async down(): Promise<void> {
    /** TODO. No-op for now */
  }
}
