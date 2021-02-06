import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPhoneNumberToRegistrations1612520964394
  implements MigrationInterface {
  name = 'AddPhoneNumberToRegistrations1612520964394';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `person` ADD `phone` varchar(20) NOT NULL'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `person` DROP COLUMN `phone`');
  }
}
