import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterorderfortipunit1629712909697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("order", new TableColumn({
            name: "tipUnitId",
            type: "int",
            isNullable: true,
            default: 1,
        })); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
