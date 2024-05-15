import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterorderlineforoverweight1629726508702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("order_line", new TableColumn({
            name: "overweight",
            type: "tinyint(2)",
            isNullable: true,
            default: 0,
        })); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
