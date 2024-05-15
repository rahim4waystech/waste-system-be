import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class driverCheckReports1616679660198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("driver_check_reports", new TableColumn({
          name: "checkStatusId",
          type: "INT",
          isNullable: true,
          default: 1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
