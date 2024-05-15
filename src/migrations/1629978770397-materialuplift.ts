import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class materialuplift1629978770397 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(new Table({
        name:"material_uplift", 
        columns:[
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'accountId',
            type: 'int',
            default: -1,
            isNullable: true,
        },
          {
              name: 'orderId',
              type: 'int',
              default: -1,
              isNullable: true,
          },
          {
              name: 'unitId',
              type: 'int',
              default: -1,
              isNullable: true,
          },
          {
            name: 'price',
            type: "float",
            isNullable: true,
            default: 0,
          },
          {
            name: 'name',
            type: "varchar(255)",
            isNullable: true,
          },
          {
            name: "qty",
            type: "float",
            isNullable: true,
            default: 0,
          },
          {
            name: "createdBy",
            type: "int",
            default: -1,
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
