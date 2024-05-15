import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterjobforsubreg1623663685466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("job", new TableColumn({
            name: "subcontractorReg",
            type: "varchar(255)",
            isNullable: true,
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
