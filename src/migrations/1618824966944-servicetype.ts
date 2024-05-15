import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class servicetype1618824966944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"service_type",
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
