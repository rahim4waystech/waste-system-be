import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class pricelistothercharges1629107476236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"price_list_other_item",
            columns:[ 
              {
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: 'increment',
                isGenerated: true,
              },
              {
                name: 'priceListId',
                type: 'int(11)',
                isNullable: false,
            },
            {
                name: 'type',
                type: 'int(11)',
                isNullable: false,
            },
            {
              name: "name",
              type: "varchar(255)",
              isNullable: false
            },
            {
              name: "price",
              type: "float",
              isNullable: false
            },
            {
                name: 'afterAmount',
                type: 'float',
                isNullable: true,
                default: 0,
            },
            {
              name: "unitId",
              type: "int(11)",
              isNullable: false
            },
            {
              name: "siteId",
              type: "int(11)",
              isNullable: true,
              default: -1,
            },
            {
              name: "active",
              type: "tinyint(2)",
              isNullable: false
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
