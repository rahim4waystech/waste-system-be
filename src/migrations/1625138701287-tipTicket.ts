import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class tipTicket1625138701287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tip_ticket",
            columns:[
              {
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: 'increment',
                isGenerated: true,
              },
              {
                  name: 'jobId',
                  type: 'int',
              },
              {
                  name: 'collectionTicketNumber',
                  type: 'TEXT',
              },
              {
                name: 'price',
                type: "float",
                default: 0,
              },
              {
                name: 'qty',
                type: "float",
                default: 0,
              },
              {
                name: "unitId",
                type: "int",
                default: -1,
              },
              {
                name: "isSignedOff",
                type: "tinyint(2)",
                default: 0,  
              },
              {
                name: "ticketNo",
                type: "TEXT",
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
