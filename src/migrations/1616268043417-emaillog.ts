import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class emaillog1616268043417 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "email_log",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true,
                },
                {
                    name: "to",
                    type: "varchar",
                },
                {
                    name: "from",
                    type: "varchar",
                },
                {
                    name: "subject",
                    type: "varchar",
                },
                {
                    name: "content",
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
