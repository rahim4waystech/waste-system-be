import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterinvoiceforconfirm1623662458543 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("invoice", new TableColumn({
            name: "confirmation",
            type: "tinyint(2)",
            isNullable: true,
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
