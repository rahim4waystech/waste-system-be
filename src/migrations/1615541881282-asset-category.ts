import {MigrationInterface, QueryRunner} from "typeorm";

export class assetCategory1615541881282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query("INSERT INTO asset_category ('name','entity') VALUES ('Vehicle','vehicle')");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
