import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class altercreditnoteforjobId1638795689302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("credit_note", new TableColumn({
            name: "jobId",
            type: "int(11)",
            isNullable: true,
            default: -1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
