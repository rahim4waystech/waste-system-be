import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class altertablejobassignmentfornotes1688031366201 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("job_assignment", new TableColumn({
            name: "notes",
            type: "TEXT",
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
