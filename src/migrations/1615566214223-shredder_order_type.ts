import {MigrationInterface, QueryRunner} from "typeorm";

export class shredderOrderType1615566214223 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`INSERT INTO shredder_order_type (name) VALUES ('Prepaid')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
