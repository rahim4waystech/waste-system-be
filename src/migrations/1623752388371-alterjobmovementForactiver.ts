import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterjobmovementForactiver1623752388371 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("driver_job_movement", new TableColumn({
            name: "active",
            type: "tinyint(2)",
            isNullable: true,
            default: 1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
