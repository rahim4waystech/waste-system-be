import {MigrationInterface, QueryRunner, Table, getConnection} from "typeorm";

export class driverCheckStatus1616679687196 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name:"driver_check_status",
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
      }),true);

      await getConnection().createQueryBuilder().insert().into("driver_check_status")
        .values([
          { name: "Unassigned"}
        ])
        .execute();

      await getConnection().createQueryBuilder().insert().into("driver_check_status")
        .values([
          { name: "Declined"}
        ])
        .execute();

      await getConnection().createQueryBuilder().insert().into("driver_check_status")
        .values([
          { name: "Accepted"}
        ])
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
