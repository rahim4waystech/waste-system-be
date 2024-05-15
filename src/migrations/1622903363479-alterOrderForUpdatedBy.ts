import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterOrderForUpdatedBy1622903363479 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("order", new TableColumn({
            name: "updatedBy",
            type: "int(11)",
            isNullable: true,
            default: -1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
