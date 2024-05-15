import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterInvoiceFortickettype1623360889825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("invoice", new TableColumn({
            name: "ticketType",
            type: "int(11)",
            isNullable: true,
            default: 1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
