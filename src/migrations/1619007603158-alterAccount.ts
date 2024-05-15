import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterAccount1619007603158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("account", new TableColumn({
            name: "isDepot",
            type: "tinyint(2)",
            isNullable: true,
            default: 0,
        }));

        await queryRunner.addColumn("account", new TableColumn({
            name: "isTip",
            type: "tinyint(2)",
            isNullable: true,
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
