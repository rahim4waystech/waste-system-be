import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterjobforweightNotes1634061323450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("job", new TableColumn({
            name: "weightNotes",
            type: "TEXT",
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
