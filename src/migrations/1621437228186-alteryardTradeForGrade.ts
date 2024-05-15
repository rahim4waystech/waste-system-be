import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alteryardTradeForGrade1621437228186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("yard_trade", new TableColumn({
            name: "gradeId",
            type: "int(11)",
            isNullable: true,
            default: -1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
