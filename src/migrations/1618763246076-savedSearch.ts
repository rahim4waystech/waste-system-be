import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class savedSearch1618763246076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"saved_search",
            columns:[
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
                isNullable: false
              },
              {
                name: "entity",
                type: "varchar(255)",
                isNullable: false
              },
              {
                name: "data",
                type: "text",
                isNullable: false
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
          }),true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
