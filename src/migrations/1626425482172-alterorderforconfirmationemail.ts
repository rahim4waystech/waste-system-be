import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterorderforconfirmationemail1626425482172 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("order", new TableColumn({
            name: "sendConfirmationEmail",
            type: "tinyint(2)",
            isNullable: true, 
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
