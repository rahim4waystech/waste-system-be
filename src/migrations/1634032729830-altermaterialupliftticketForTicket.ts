import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class altermaterialupliftticketForTicket1634032729830 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("material_uplift_ticket", new TableColumn({
            name: "ticketNumber",
            type: "varchar(255)",
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
