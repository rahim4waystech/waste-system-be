import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class driverCheckReports1616763379825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("driver_check_reports", new TableColumn({
          name: "rejectionNote",
          type: "TEXT",
          isNullable: false
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
