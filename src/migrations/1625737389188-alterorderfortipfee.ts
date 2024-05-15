import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterorderfortipfee1625737389188 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("order", new TableColumn({
            name: "tipFee",
            type: "FLOAT",
            isNullable: true,
            default: 0, 
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
