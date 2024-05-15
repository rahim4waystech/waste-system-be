import {MigrationInterface, QueryRunner} from "typeorm";

export class lead1615988687482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `lead` CHANGE COLUMN `ownerId` `ownerId` INT NULL DEFAULT -1;");
      await queryRunner.query("ALTER TABLE `lead` CHANGE COLUMN `accountId` `accountId` INT NULL DEFAULT -1;");
      await queryRunner.query("ALTER TABLE `lead` CHANGE COLUMN `typeId` `typeId` INT NULL DEFAULT -1;");
      await queryRunner.query("ALTER TABLE `lead` CHANGE COLUMN `statusId` `statusId` INT NULL DEFAULT -1;");
      await queryRunner.query("ALTER TABLE `lead` CHANGE COLUMN `contactId` `contactId` INT NULL DEFAULT -1;");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
