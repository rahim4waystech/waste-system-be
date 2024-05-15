import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class partAssignment1616670902735 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("part_assignment", new TableColumn({
          name: "vehicleId",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
