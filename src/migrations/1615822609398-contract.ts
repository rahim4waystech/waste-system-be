import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class contract1615822609398 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("contract", new TableColumn({
          name: "recurrenceId",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
