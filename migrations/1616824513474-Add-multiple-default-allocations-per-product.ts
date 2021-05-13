import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMultipleDefaultAllocationsPerProduct1616824513474
  implements MigrationInterface {
  name = 'AddMultipleDefaultAllocationsPerProduct1616824513474';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `allocation` ADD `denomination` varchar(255) NULL'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `allocation` DROP COLUMN `denomination`'
    );
  }
}
