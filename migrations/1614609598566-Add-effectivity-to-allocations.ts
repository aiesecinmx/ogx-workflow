import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEffectivityToAllocations1614609598566
  implements MigrationInterface {
  name = 'AddEffectivityToAllocations1614609598566';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `allocation` ADD `effectiveStart` datetime NULL'
    );
    await queryRunner.query(
      "UPDATE `allocation` SET `effectiveStart`='2020-08-01 00:00:00'" /** All existing allocations are from S2 of 2020 */
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` CHANGE `effectiveStart` `effectiveStart` datetime NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` ADD `effectiveEnd` datetime NULL'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `allocation` DROP COLUMN `effectiveEnd`'
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` DROP COLUMN `effectiveStart`'
    );
  }
}
