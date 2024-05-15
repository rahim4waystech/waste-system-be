import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterAccountForLogo1621856243072 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("account", new TableColumn({
            name: "logo",
            type: "TEXT",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
