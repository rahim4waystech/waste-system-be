import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class correspondence1616070403964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "correspondence",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true,
                },
                {
                    name: "correspondenceTypeId",
                    type: "int",
                },
                {
                    name: "emailLogId",
                    type: "int",
                    isNullable: true,
                    default: -1,
                },
                {
                    name: "date",
                    type: "date",
                },
                {
                    name: "entity",
                    type: "varchar",
                },
                {
                    name: "entityId",
                    type: "int",
                },
                {
                    name: "subject",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: "createdBy",
                    type: "int",
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
