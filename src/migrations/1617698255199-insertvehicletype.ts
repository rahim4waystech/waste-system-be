import {MigrationInterface, QueryRunner, getConnection} from "typeorm";

export class insertvehicletype1617698255199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      // await getConnection()
      //   .createQueryBuilder()
      //   .insert()
      //   .into("vehicle_type")
      //   .values([
      //     { name: "Tanker"},
      //   ])
      //   .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
