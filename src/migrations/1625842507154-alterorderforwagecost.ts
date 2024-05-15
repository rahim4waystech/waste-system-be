import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterorderforwagecost1625842507154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("order", new TableColumn({
            name: "employeeWageCost",
            type: "FLOAT",
            isNullable: true,
            default: 0, 
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
