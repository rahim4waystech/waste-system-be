import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class altercreditnoteforemailstuff1638873290571 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("credit_note", new TableColumn({
            name: "emailed",
            type: "tinyint(2)",
            isNullable: true,
            default: 0,
        }));

        await queryRunner.addColumn("credit_note", new TableColumn({
            name: "emailedDate",
            type: "date",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
