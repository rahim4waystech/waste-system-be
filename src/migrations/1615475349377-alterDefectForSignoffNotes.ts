import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterDefectForSignoffNotes1615475349377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("defects", new TableColumn({
            name: "signoffNotes",
            type: "TEXT",
            isNullable: true,
            default: null,
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
