import {MigrationInterface, QueryRunner} from "typeorm";

export class fileSystem1615479512311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        CREATE TABLE file_system
        (
          id int NOT NULL AUTO_INCREMENT,
          folderName varchar(255) NOT NULL DEFAULT 'no folder',
          description text,
          parentId int NOT NULL DEFAULT '-1',
          createdBy int DEFAULT NULL,
          createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
          updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
          PRIMARY KEY (id),
          UNIQUE KEY id_UNIQUE (id)
        )
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
