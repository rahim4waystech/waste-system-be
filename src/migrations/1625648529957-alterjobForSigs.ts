import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterjobForSigs1625648529957 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("job", new TableColumn({
            name: "carriarSignature",
            type: "TEXT",
            isNullable: true,
        }));

        await queryRunner.addColumn("job", new TableColumn({
            name: "carriarSignatureName",
            type: "TEXT",
            isNullable: true,
            default: null,
        }));

        await queryRunner.addColumn("job", new TableColumn({
            name: "tippedSignature",
            type: "TEXT",
            isNullable: true,
        }));

        await queryRunner.addColumn("job", new TableColumn({
            name: "tippedSignatureName",
            type: "TEXT",
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
