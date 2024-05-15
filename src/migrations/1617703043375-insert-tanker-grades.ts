import {MigrationInterface, QueryRunner, getConnection} from "typeorm";

export class insertTankerGrades1617703043375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into("grade")
        .values([
          { name: "Landfill Leachate", ewcCodes:"19 07 03"}
        ])
        .execute();
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into("grade")
        .values([
          { name: "Interceptor Waste", ewcCodes:"13 05 03"}
        ])
        .execute();
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into("grade")
        .values([
          { name: "Dirty Water", ewcCodes:"16 10 02"}
        ])
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
