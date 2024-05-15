import {MigrationInterface, QueryRunner} from "typeorm";

export class recurrence1615677475382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        CREATE TABLE recurrence (
        id INT NOT NULL AUTO_INCREMENT,
        startDate DATE NULL,
        endDate DATE NULL,
        timeValue INT NULL,
        timeUnit VARCHAR(255) NULL,
        createdBy INT NULL,
        createdAt DATETIME(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
        updatedAt DATETIME(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
        PRIMARY KEY (id),
        UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE);
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
