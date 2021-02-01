import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSchema1610949316042 implements MigrationInterface {
  name = 'InitialSchema1610949316042';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `state` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'CREATE TABLE `university` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `shortName` varchar(255) NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `stateId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'CREATE TABLE `campus` (`id` varchar(36) NOT NULL, `prefix` varchar(255) NULL, `name` varchar(255) NULL, `denomination` varchar(255) NULL, `isMainCampus` tinyint NOT NULL DEFAULT 0, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `universityId` varchar(36) NULL, `stateId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'CREATE TABLE `expa_entity` (`expaId` int UNSIGNED NOT NULL, `name` varchar(255) NOT NULL, `isClosed` tinyint NOT NULL DEFAULT 0, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`expaId`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'CREATE TABLE `product` (`expaId` tinyint UNSIGNED NOT NULL, `name` varchar(255) NOT NULL, `shortName` varchar(255) NOT NULL, PRIMARY KEY (`expaId`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'CREATE TABLE `allocation` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `campusId` varchar(36) NULL, `productExpaId` tinyint UNSIGNED NULL, `entityExpaId` int UNSIGNED NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'CREATE TABLE `person` (`id` varchar(36) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `maskedEmail` varchar(255) NOT NULL, `expaId` int UNSIGNED NOT NULL, `contacted` timestamp NOT NULL, `referral` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `mainProductExpaId` tinyint UNSIGNED NULL, `allocationId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'ALTER TABLE `university` ADD CONSTRAINT `FK_be4ec17a2f82721ac4f11b81de9` FOREIGN KEY (`stateId`) REFERENCES `state`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `campus` ADD CONSTRAINT `FK_0aff760c0ca58df1465724ab8d7` FOREIGN KEY (`universityId`) REFERENCES `university`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `campus` ADD CONSTRAINT `FK_11123d4c830f224ebca104e951d` FOREIGN KEY (`stateId`) REFERENCES `state`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` ADD CONSTRAINT `FK_ab1b4737764a6b319f6e50b2001` FOREIGN KEY (`campusId`) REFERENCES `campus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` ADD CONSTRAINT `FK_e61d4ddf22c6dbbacac0e707adc` FOREIGN KEY (`productExpaId`) REFERENCES `product`(`expaId`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` ADD CONSTRAINT `FK_167f21f6044b4bc63687a9bc78b` FOREIGN KEY (`entityExpaId`) REFERENCES `expa_entity`(`expaId`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `person` ADD CONSTRAINT `FK_3643a0dde700fb362c709efaf97` FOREIGN KEY (`mainProductExpaId`) REFERENCES `product`(`expaId`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `person` ADD CONSTRAINT `FK_353832faf84ff2698f569d226dc` FOREIGN KEY (`allocationId`) REFERENCES `allocation`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `person` DROP FOREIGN KEY `FK_353832faf84ff2698f569d226dc`'
    );
    await queryRunner.query(
      'ALTER TABLE `person` DROP FOREIGN KEY `FK_3643a0dde700fb362c709efaf97`'
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` DROP FOREIGN KEY `FK_167f21f6044b4bc63687a9bc78b`'
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` DROP FOREIGN KEY `FK_e61d4ddf22c6dbbacac0e707adc`'
    );
    await queryRunner.query(
      'ALTER TABLE `allocation` DROP FOREIGN KEY `FK_ab1b4737764a6b319f6e50b2001`'
    );
    await queryRunner.query(
      'ALTER TABLE `campus` DROP FOREIGN KEY `FK_11123d4c830f224ebca104e951d`'
    );
    await queryRunner.query(
      'ALTER TABLE `campus` DROP FOREIGN KEY `FK_0aff760c0ca58df1465724ab8d7`'
    );
    await queryRunner.query(
      'ALTER TABLE `university` DROP FOREIGN KEY `FK_be4ec17a2f82721ac4f11b81de9`'
    );
    await queryRunner.query('DROP TABLE `person`');
    await queryRunner.query('DROP TABLE `allocation`');
    await queryRunner.query('DROP TABLE `product`');
    await queryRunner.query('DROP TABLE `expa_entity`');
    await queryRunner.query('DROP TABLE `campus`');
    await queryRunner.query('DROP TABLE `university`');
    await queryRunner.query('DROP TABLE `state`');
  }
}
