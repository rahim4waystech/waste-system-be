import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class jobForTransportNotes1622661084965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("job", new TableColumn({
            name: "transportSignOffNotes",
            type: "TEXT",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
