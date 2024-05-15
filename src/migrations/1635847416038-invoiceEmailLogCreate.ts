import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class invoiceEmailLogCreate1635847416038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"invoice_email_log", 
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
                  name: 'date',
                  type: 'DATE',
                  isNullable: true,
              },
              {
                  name: 'toEmail',
                  type: 'varchar(255)',
                  isNullable: true,
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
