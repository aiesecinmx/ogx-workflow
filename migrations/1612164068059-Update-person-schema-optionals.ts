import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePersonSchemaOptionals1612164068059
  implements MigrationInterface {
  name = 'UpdatePersonSchemaOptionals1612164068059';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `person` CHANGE `maskedEmail` `maskedEmail` varchar(255) NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `person` CHANGE `expaId` `expaId` int UNSIGNED NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `person` CHANGE `contacted` `contacted` timestamp NULL'
    );
    await queryRunner.query(
      "ALTER TABLE `person` CHANGE `referral` `referral` varchar(255) NOT NULL DEFAULT 'Other'"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `person` CHANGE `referral` `referral` varchar(255) NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `person` CHANGE `contacted` `contacted` timestamp NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `person` CHANGE `expaId` `expaId` int UNSIGNED NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `person` CHANGE `maskedEmail` `maskedEmail` varchar(255) NOT NULL'
    );
  }
}
