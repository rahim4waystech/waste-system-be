import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterCorrForCalendarId1621423440264 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("correspondence", new TableColumn({
            name: "calendarId",
            type: "int(11)",
            isNullable: true,
            default: -1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
