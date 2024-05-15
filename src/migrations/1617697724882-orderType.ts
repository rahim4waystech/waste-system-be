import {MigrationInterface, QueryRunner, getConnection} from "typeorm";

export class orderType1617697724882 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into("order_type")
        .values([
          { name: "Tankers"},
        ])
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
