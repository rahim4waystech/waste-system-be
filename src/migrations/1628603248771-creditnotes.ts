import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class creditnotes1628603248771 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"credit_note", 
            columns:[
              {
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: 'increment',
                isGenerated: true,
              },
              {
                  name: 'invoiceId',
                  type: 'int',
                  default: -1,
                  isNullable: true,
              },
              {
                  name: 'invoiceItemId',
                  type: 'int',
                  default: -1,
                  isNullable: true,
              },
              {
                name: 'date',
                type: "date",
                default: null,
              },
              {
                name: 'value',
                type: "float",
                default: 0,
              },
              {
                name: "description",
                type: "text",
              },
              {
                name: "deleted",
                type: "tinyint(2)",
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
