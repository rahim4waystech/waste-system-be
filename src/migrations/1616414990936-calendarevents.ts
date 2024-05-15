import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class calendarevents1616414990936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "calendar_event",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true,
                },
                {
                    name: 'calendarId',
                    type: 'int',
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "date",
                    type: "date",
                },
                {
                    name: "startTime",
                    type: "time",
                },
                {
                    name: "endTime",
                    type: "time",
                },
                {
                    name: "isFullDay",
                    type: "tinyint",
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: 'createdAt',
                    default: 'now()',
                    type: 'datetime',
                },
                {
                    name: 'updatedAt',
                    default: 'now()',
                    type: 'datetime',
                }

            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
