import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class yardTradeForUnit1621170230933 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("yard_trade_pricing", new TableColumn({
            name: "unitId",
            type: "int(11)",
            isNullable: true,
            default: -1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
