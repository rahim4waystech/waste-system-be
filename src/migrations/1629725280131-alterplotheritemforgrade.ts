import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterplotheritemforgrade1629725280131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("price_list_other_item", new TableColumn({
            name: "gradeId",
            type: "int",
            isNullable: true,
            default: -1,
        })); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
