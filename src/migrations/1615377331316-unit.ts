import {MigrationInterface, QueryRunner} from "typeorm";

export class unit1615377331316 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`INSERT INTO unit (name) VALUES ('Prepaid Bag')`);
      await queryRunner.query(`INSERT INTO unit (name) VALUES ('Prepaid Delivery')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
