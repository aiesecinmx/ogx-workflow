import { MigrationInterface, QueryRunner } from 'typeorm';

export class IntroduceDefaultStateAllocations1612654505629
  implements MigrationInterface {
  name = 'IntroduceDefaultStateAllocations1612654505629';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `allocation` ADD `type` varchar(255) NOT NULL'
    );
    await queryRunner.query('ALTER TABLE `allocation` ADD `stateId` int NULL');
    await queryRunner.query(
      'CREATE INDEX `IDX_7bca512c3eb8683a62576a9087` ON `allocation` (`type`)'
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` ADD CONSTRAINT `FK_e62c87649a6e0c7d05771c8be26` FOREIGN KEY (`stateId`) REFERENCES `state`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `allocation` DROP FOREIGN KEY `FK_e62c87649a6e0c7d05771c8be26`'
    );
    await queryRunner.query(
      'DROP INDEX `IDX_7bca512c3eb8683a62576a9087` ON `allocation`'
    );
    await queryRunner.query('ALTER TABLE `allocation` DROP COLUMN `stateId`');
    await queryRunner.query('ALTER TABLE `allocation` DROP COLUMN `type`');
  }
}
