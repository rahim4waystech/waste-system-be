import {MigrationInterface, QueryRunner, getConnection, TableColumn} from "typeorm";

export class insertTimelinesetting1617702121898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("user_settings", new TableColumn({
          name: "timelineOrientationTanker",
          type: "INT",
          isNullable: false,
          default: 1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
