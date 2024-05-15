import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterJobForTareWeight1621502832063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("job", new TableColumn({
            name: "tareWeight",
            type: "float",
            isNullable: true,
            default: 0,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
