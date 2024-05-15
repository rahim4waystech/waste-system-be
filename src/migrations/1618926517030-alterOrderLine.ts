import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterOrderLine1618926517030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("order_line", new TableColumn({
            name: "name",
            type: "varchar(255)",
            isNullable: true,
            default: null,
        }));

        await queryRunner.addColumn("order_line", new TableColumn({
            name: "unitId",
            type: "int",
            isNullable: true,
            default: -1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
