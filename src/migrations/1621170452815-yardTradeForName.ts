import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class yardTradeForName1621170452815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("yard_trade_pricing", new TableColumn({
            name: "name",
            type: "varchar(255)",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
