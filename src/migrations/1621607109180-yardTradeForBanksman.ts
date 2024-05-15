import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class yardTradeForBanksman1621607109180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("yard_trade", new TableColumn({
            name: "complianceNotes",
            type: "varchar(255)",
            isNullable: true,
            default: null,
        }));

        await queryRunner.addColumn("yard_trade", new TableColumn({
            name: "complianceIssue",
            type: "tinyint(2)",
            isNullable: true,
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
