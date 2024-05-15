import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterContractForReference1615208419985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("contract", new TableColumn({
            name: "contractRef",
            type: "varchar(255)",
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
