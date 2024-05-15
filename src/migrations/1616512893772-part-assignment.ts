import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class partAssignment1616512893772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name:"part_assignment",
        columns:[
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
              name: "defectId",
              type: "int",
              isNullable: true,
              default: -1,
          },
          {
              name: "partId",
              type: "int",
              isNullable: true,
              default: -1,
          },
          {
              name: "qty",
              type: "int",
              isNullable: true,
              default: 0,
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
