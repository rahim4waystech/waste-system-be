import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterProductForDisplayName1621341565840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("product", new TableColumn({
            name: "displayName",
            type: "varchar(255)",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
