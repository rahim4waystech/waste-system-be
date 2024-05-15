import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterinvoiceforadditionalcharge1635695335389 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("invoice", new TableColumn({
            name: "isAdditionalCharge",
            type: "tinyint(2)",
            isNullable: true,
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
