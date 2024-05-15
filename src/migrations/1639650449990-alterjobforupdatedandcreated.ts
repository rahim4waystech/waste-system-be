import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterjobforupdatedandcreated1639650449990 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("job", new TableColumn({
            name: "createdBy",
            type: "int(11)",
            isNullable: true,
            default: -1,
        }));

        await queryRunner.addColumn("job", new TableColumn({
            name: "updatedBy",
            type: "int(11)",
            isNullable: true,
            default: -1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
