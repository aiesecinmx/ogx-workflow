import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeLCNameTamaulipas1614695126922 implements MigrationInterface {
  expaId = 1865;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "UPDATE `expa_entity` SET name='Tamaulipas' WHERE expaId=1865"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "UPDATE `expa_entity` SET name='Tampico' WHERE expaId=1865"
    );
  }
}
