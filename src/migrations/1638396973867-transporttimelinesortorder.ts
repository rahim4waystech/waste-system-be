import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class transporttimelinesortorder1638396973867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"transport_time_line_sort_order", 
            columns:[
              {
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: 'increment',
                isGenerated: true,
              },
              {
                name: 'unitName',
                type: 'varchar(255)',
            },
            {
                name: 'vehicleId',
                type: 'int(11)',
                default: -1,
                isNullable: true,
            },
            {
                name: 'driverId',
                type: 'int(11)',
                default: -1,
                isNullable: true,
            },
            {
                name: 'subcontractorId',
                type: 'int(11)',
                default: -1,
                isNullable: true,
            },
            {
                name: 'sortOrder',
                type: 'int(11)',
                default: -1,
                isNullable: true,
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
        }));
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
