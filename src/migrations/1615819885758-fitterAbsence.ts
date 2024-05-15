import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class fitterAbsence1615819885758 implements MigrationInterface {


    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "fitter_absence",
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
                    name: "fitterAbsenceTypeId",
                    type: "int",
                },
                {
                    name: "startDate",
                    type: "date",
                },
                {
                    name: "endDate",
                    type: "date",
                },
                {
                    name: "notes",
                    type: "text",
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
    }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
