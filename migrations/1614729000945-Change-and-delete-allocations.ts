import {
  DeleteAllocationInstructions,
  NewAllocationsInstructions,
  NewCampusesInstructions,
  NewUniversitiesInstructions,
  UpdateAllocationInstructions,
} from '../seeds/allocations2021-1.seed';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuid } from 'uuid';

const effectiveEnd = '2021-02-01 00:00:00';
const effectiveStart = effectiveEnd;

export class ChangeAndDeleteAllocations1614729000945
  implements MigrationInterface {
  name = 'ChangeAndDeleteAllocations1614729000945';

  public async up(queryRunner: QueryRunner): Promise<void> {
    /** Alter Existing Campus Allocations */
    console.log('==== Step 1. Altering existing campus allocation ====');
    const campusesToUpdate = UpdateAllocationInstructions.filter(
      ({ campusId }) => campusId
    );
    const mainUniversitiesToUpdate = UpdateAllocationInstructions.filter(
      ({ universityId }) => universityId
    );

    console.log('Deleting and adding campuses allocations');
    for (const { campusId, productMapping } of campusesToUpdate) {
      for (const [product, lc] of Object.entries(productMapping)) {
        console.log(
          await queryRunner.query(
            `UPDATE allocation SET effectiveEnd=? WHERE campusId = ? AND productExpaId = (SELECT expaId FROM product WHERE shortName = ?)`,
            [effectiveEnd, campusId, product]
          )
        );

        console.log(
          await queryRunner.query(
            `INSERT INTO allocation (id,campusId,productExpaId,entityExpaId,type,effectiveStart)
            SELECT ?,?,p.expaId,e.expaId,'UniversityAllocation',? FROM product p,expa_entity e WHERE p.shortName = ? AND e.name = ?`,
            [uuid(), campusId, effectiveStart, product, lc]
          )
        );
      }
    }

    console.log('Deleting and adding universities allocations');
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

    /** Insert New Allocations */
    console.log('==== Step 2. Inserting new allocations ====');

    const mainCampusesToCreate = new Map(
      NewAllocationsInstructions.filter(
        ({ universityId }) => universityId
      ).map((allocation) => [allocation.universityId, allocation])
    );
    // Add missing universities and main campuses
    console.log('Adding missing universities and main campuses');
    for (const university of NewUniversitiesInstructions) {
      const { id, name, shortName = null, state } = university;
      console.log(
        await queryRunner.query(
          `INSERT INTO university (id, name, shortName, stateId)
          SELECT ?,?,?,s.id FROM state s WHERE s.name = ?`,
          [id, name, shortName, state]
        )
      );

      const mainCampusToCreate = mainCampusesToCreate.get(id);
      if (mainCampusToCreate) {
        const campusId = uuid();
        console.log(
          await queryRunner.query(
            `INSERT INTO campus (id, universityId, stateId, isMainCampus)
            SELECT ?,id,stateId,TRUE FROM university WHERE id = ?`,
            [campusId, mainCampusToCreate.universityId]
          )
        );
        mainCampusesToCreate.set(id, { ...mainCampusToCreate, campusId });
      }
    }
    // Add campuses
    console.log('Adding new campuses');
    for (const instruction of NewCampusesInstructions) {
      const {
        id,
        universityId,
        name,
        state,
        isMainCampus = false,
      } = instruction;
      console.log(
        await queryRunner.query(
          `INSERT INTO campus (id, universityId, name, isMainCampus, stateId)
          SELECT ?,?,?,?,s.id FROM state s WHERE s.name = ?`,
          [id, universityId, name, isMainCampus, state]
        )
      );
    }
    // Add new allocations
    const campusAllocationsToAdd = NewAllocationsInstructions.filter(
      ({ campusId }) => campusId
    );
    const universityAllocationsToAdd = NewAllocationsInstructions.filter(
      ({ universityId }) => universityId
    );
    console.log('Adding allocations for campus ids');
    for (const { campusId, productMapping } of campusAllocationsToAdd) {
      for (const [product, lc] of Object.entries(productMapping)) {
        console.log(
          await queryRunner.query(
            `INSERT INTO allocation (id,campusId,productExpaId,entityExpaId,type,effectiveStart)
            SELECT ?,?,p.expaId,e.expaId,'UniversityAllocation',? FROM product p,expa_entity e WHERE p.shortName = ? AND e.name = ?`,
            [uuid(), campusId, effectiveStart, product, lc]
          )
        );
      }
    }
    console.log('Adding allocations for university ids');
    for (const { universityId, productMapping } of universityAllocationsToAdd) {
      for (const [product, lc] of Object.entries(productMapping)) {
        console.log(
          await queryRunner.query(
            `INSERT INTO allocation (id,campusId,productExpaId,entityExpaId,type,effectiveStart)
            SELECT ?,c.id,p.expaId,e.expaId,'UniversityAllocation',? FROM campus c,product p,expa_entity e WHERE c.universityId = ? AND p.shortName = ? AND e.name = ?`,
            [uuid(), effectiveStart, universityId, product, lc]
          )
        );
      }
    }

    /** Soft Delete Allocations */
    console.log('==== Step 3. Soft deleting old allocations ====');

    const campusesToDelete = DeleteAllocationInstructions.map(
      ({ campusId }) => campusId
    ).filter(Boolean);
    console.log('Deleting campus allocations');
    console.log(
      await queryRunner.query(
        'UPDATE allocation SET effectiveEnd=? WHERE campusId in (?)',
        [effectiveEnd, campusesToDelete]
      )
    );
    const universitiesToDelete = DeleteAllocationInstructions.map(
      ({ universityId }) => universityId
    ).filter(Boolean);
    console.log('Deleting university allocations');
    console.log(
      await queryRunner.query(
        'UPDATE allocation SET effectiveEnd=? WHERE campusId IN (SELECT id FROM campus WHERE universityId IN (?) and isMainCampus=true)',
        [effectiveEnd, universitiesToDelete]
      )
    );

    // await queryRunner.query(`SELECT 123 FROM abcd`);
  }

  public async down(): Promise<void> {
    /** TODO. No-op for now */
  }
}
