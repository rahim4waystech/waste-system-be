import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class altertipticketFordeleted1625738224950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tip_ticket", new TableColumn({
            name: "deleted",
            type: "tinyint(2)",
            isNullable: true,
            default: 0, 
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
