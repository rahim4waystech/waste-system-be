import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterorderforcontract1638885308149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.addColumn("order", new TableColumn({
        //     name: "isContract",
        //     type: "tinyint(2)",
        //     isNullable: true,
        //     default: 0,
        // }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
