import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class jobAssignment1615822625232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("job_assignment", new TableColumn({
          name: "recurrenceId",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
