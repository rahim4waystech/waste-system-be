import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterjobfornewprice1629976739712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         
        await queryRunner.addColumn("job", new TableColumn({
            name: "newPrice",
            type: "float",
            isNullable: true,
            default: 0,
        })); 

        await queryRunner.addColumn("job", new TableColumn({
            name: "overridePrice",
            type: "tinyint(2)",
            isNullable: true,
            default: 0,
        })); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
