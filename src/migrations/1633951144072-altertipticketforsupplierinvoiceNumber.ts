import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class altertipticketforsupplierinvoiceNumber1633951144072 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tip_ticket", new TableColumn({
            name: "supplierInvoiceNumber",
            type: "varchar(255)",
            isNullable: true,
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
