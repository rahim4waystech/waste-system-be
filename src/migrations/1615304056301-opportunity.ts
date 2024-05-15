import {MigrationInterface, QueryRunner} from "typeorm";

export class opportunity1615304056301 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `waste`.`opportunity` ADD COLUMN `accountId` INT NULL DEFAULT -1 AFTER `email`,ADD COLUMN `contactId` INT NULL DEFAULT -1 AFTER `accountId`;');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
