import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class fitterHours1615801918517 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "fitter_hours",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true,
                },
                {
                    name: "fitterId",
                    type: "int",
                },
                {
                    name: 'startTime',
                    type: 'time',
                },
                {
                    name: 'endTime',
                    type: 'time',
                },
                {
                    name: 'lunchBreak',
                    type: 'float',
                },
                {
                    name: 'chargeableHours',
                    type: 'float',
                },
                {
                    name: 'notes',
                    type: 'text',
                },
                {
                    name: 'date',
                    type: 'date',
                }, 
                {
                    name: 'createdBy',
                    type: 'int'
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
