import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class fitterAbsenceTypes1615819621940 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "fitter_absence_type",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true,
                },
                {
                    name: "name",
                    type: "varchar(255)",
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
