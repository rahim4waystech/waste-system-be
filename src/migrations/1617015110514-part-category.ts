import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class partCategory1617015110514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name:"part_category",
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
      }),true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
