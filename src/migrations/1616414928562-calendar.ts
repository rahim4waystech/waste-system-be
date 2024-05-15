import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class calendar1616414928562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "calendar",
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
                    type: "varchar",
                },
                {
                    name: "colour",
                    type: "varchar",
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
