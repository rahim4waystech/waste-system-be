import {MigrationInterface, QueryRunner} from "typeorm";

export class TestTable1614952413097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE test (id INT NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
