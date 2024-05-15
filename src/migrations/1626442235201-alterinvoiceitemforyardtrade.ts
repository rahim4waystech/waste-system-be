import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterinvoiceitemforyardtrade1626442235201 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("invoice_item", new TableColumn({
            name: "yardTradePricingId",
            type: "int(11)",
            isNullable: true,
            default: -1, 
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
