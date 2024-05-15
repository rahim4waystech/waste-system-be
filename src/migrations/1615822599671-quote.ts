import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class quote1615822599671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("quote", new TableColumn({
          name: "recurrenceId",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
