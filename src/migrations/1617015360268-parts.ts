import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class parts1617015360268 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("parts", new TableColumn({
          name: "partCategoryId",
          type: "INT",
          isNullable: true,
          default: -1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
