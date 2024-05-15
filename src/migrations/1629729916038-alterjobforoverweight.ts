import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterjobforoverweight1629729916038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //hasOverweight
        await queryRunner.addColumn("job", new TableColumn({
            name: "hasOverweight",
            type: "tinyint(2)",
            isNullable: true,
            default: 1,
        })); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
