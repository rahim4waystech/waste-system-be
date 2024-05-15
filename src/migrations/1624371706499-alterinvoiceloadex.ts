import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterinvoiceloadex1624371706499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("invoice", new TableColumn({
            name: "loadEx",
            type: "longtext",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
