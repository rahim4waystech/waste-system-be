import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterJobCollectionOrder1631271305340 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("job", new TableColumn({
            name: "collectionOrder",
            type: "tinyint(3)",
            isNullable: true,
            default: 0,
        }));
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
