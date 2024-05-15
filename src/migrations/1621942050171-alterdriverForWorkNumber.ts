import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterdriverForWorkNumber1621942050171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("driver", new TableColumn({
            name: "workNumber",
            type: "varchar(255)",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
