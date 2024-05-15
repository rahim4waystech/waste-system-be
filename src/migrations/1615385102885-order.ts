import {MigrationInterface, QueryRunner} from "typeorm";

export class order1615385102885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `order` ADD COLUMN isPrepaid TINYINT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
