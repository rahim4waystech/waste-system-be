import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterjobfortimelinenotes1623766101921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("job", new TableColumn({
            name: "timelineNotes",
            type: "longtext",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
