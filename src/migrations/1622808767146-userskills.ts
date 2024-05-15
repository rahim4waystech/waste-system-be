import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class userskills1622808767146 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       ( await queryRunner.createTable(new Table({
            name:"user_skill",
            columns:[
              {
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: 'increment',
                isGenerated: true,
              },
              {
                name: 'userId',
                type: "int",
              },
              {
                name: "orderTypeId",
                type: "int",
              },
              {
                name: "isPrimary",
                type: "tinyint(2)",
                default: 0,  
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
          }),true))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
