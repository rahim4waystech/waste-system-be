import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class recurrence1615827468639 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("recurrence", new TableColumn({
          name: "recurrenceAmount",
          type: "INT",
          isNullable: true,
          default: 0,
      }));
      await queryRunner.addColumn("recurrence", new TableColumn({
          name: "recurrenceWeekDays",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
      await queryRunner.addColumn("recurrence", new TableColumn({
          name: "recurrenceDayNo",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
      await queryRunner.addColumn("recurrence", new TableColumn({
          name: "recurrenceWeekno",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
      await queryRunner.addColumn("recurrence", new TableColumn({
          name: "recurrenceMonthno",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
      await queryRunner.addColumn("recurrence", new TableColumn({
          name: "recurrenceType",
          type: "varchar",
          isNullable: true,
          default: "'No Type'",
      }));
      await queryRunner.addColumn("recurrence", new TableColumn({
          name: "recurrenceParentId",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
