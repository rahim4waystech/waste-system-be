import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class assetRegister1616497104681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("asset_register", new TableColumn({
          name: "partId",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
