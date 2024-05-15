import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterJob1620724161107 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("job", new TableColumn({
            name: "complianceIssue",
            type: "tinyint(2)",
            isNullable: true,
            default: 0,
        }));

        await queryRunner.addColumn("job", new TableColumn({
            name: "complianceNotes",
            type: "TEXT",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
