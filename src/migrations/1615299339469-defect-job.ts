import {MigrationInterface, QueryRunner} from "typeorm";

export class defectJob1615299339469 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE defect_job ADD COLUMN fitterSignoff TEXT NULL AFTER notes');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
