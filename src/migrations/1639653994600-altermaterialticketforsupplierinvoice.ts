import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class altermaterialticketforsupplierinvoice1639653994600 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("material_uplift_ticket", new TableColumn({
            name: "supplierInvoiceNumber",
            type: "varchar(255)",
            isNullable: true,
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
