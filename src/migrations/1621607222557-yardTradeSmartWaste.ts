import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class yardTradeSmartWaste1621607222557 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"yard_trade_smart_waste",
            columns:[
              {
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: 'increment',
                isGenerated: true,
              },
              {
                name: 'yardTradeId',
                type: "int",
              },
              {
                name: "ewcCodeId",
                type: "int",
              },
              {
                name: "notes",
                type: "TEXT",  
              },
              {
                  name: "percentage",
                  type: "float",
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
