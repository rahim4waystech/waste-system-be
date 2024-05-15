import {MigrationInterface, QueryRunner, Table} from "typeorm";
export class jobsmartwaste1620206215849 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"job_smart_waste",
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
