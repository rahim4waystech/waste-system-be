import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class pricelist1618824647337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"price_list",
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
                name: "accountId",
                type: "int(11)",
                isNullable: false
              },
              {
                name: "active",
                type: "tinyint(2)",
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
