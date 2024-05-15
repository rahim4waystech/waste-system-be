import {MigrationInterface, QueryRunner, getConnection} from "typeorm";

export class assetCategory1616497127421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into("asset_category")
        .values([
          { name: "Vehicle", entity: "vehicle", "createdBy": -1 },
        ])
        .execute();
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into("asset_category")
        .values([
          { name: "Part", entity: "part", "createdBy": -1 },
        ])
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
