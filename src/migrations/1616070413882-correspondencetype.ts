import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class correspondencetype1616070413882 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "correspondence_type",
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
