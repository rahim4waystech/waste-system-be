import {MigrationInterface, QueryRunner} from 'typeorm';

export class parts1616082104824 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        CREATE TABLE parts (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NULL,
        manufacturer VARCHAR(255) NULL,
        model VARCHAR(255) NULL,
        description TEXT NULL,
        qty INT(9) NOT NULL DEFAULT 0,
        sku VARCHAR(255) NULL,
        manufacturerPartNumber VARCHAR(255) NULL,
        eanNumber VARCHAR(255) NULL,
        value FLOAT NULL,
        PRIMARY KEY (id),
        UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE)
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
