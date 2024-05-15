import {MigrationInterface, QueryRunner} from "typeorm";

export class parts1616083996413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        ALTER TABLE parts
        ADD COLUMN depotId INT NOT NULL DEFAULT -1 AFTER value,
        ADD COLUMN createdBy INT NOT NULL DEFAULT -1 AFTER depotId,
        ADD COLUMN updatedAt DATETIME(6) NULL DEFAULT CURRENT_TIMESTAMP(6) AFTER createdBy,
        ADD COLUMN createdAt DATETIME(6) NULL DEFAULT CURRENT_TIMESTAMP(6) AFTER updatedAt,
        CHANGE COLUMN value value INT(9) NOT NULL DEFAULT 0 ;
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
