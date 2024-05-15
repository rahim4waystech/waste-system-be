import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterYardtradeForSigs1625652615373 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("yard_trade", new TableColumn({
            name: "carriarSignature",
            type: "TEXT",
            isNullable: true, 
        }));

        await queryRunner.addColumn("yard_trade", new TableColumn({
            name: "carriarSignatureName",
            type: "TEXT",
            isNullable: true,
            default: null,
        }));

        await queryRunner.addColumn("yard_trade", new TableColumn({
            name: "tippedSignature",
            type: "TEXT",
            isNullable: true,
        }));

        await queryRunner.addColumn("yard_trade", new TableColumn({
            name: "tippedSignatureName",
            type: "TEXT",
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
