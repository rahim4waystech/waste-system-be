import {MigrationInterface, QueryRunner} from "typeorm";

export class recurrence1615895589561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `recurrence` CHANGE COLUMN `recurrenceWeekDays` `recurrenceWeekDays` VARCHAR(255) NULL ;");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
