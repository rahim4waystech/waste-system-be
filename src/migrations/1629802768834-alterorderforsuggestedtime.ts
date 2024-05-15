import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterorderforsuggestedtime1629802768834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("order", new TableColumn({
            name: "suggestedTime",
            type: "varchar(255)",
            isNullable: true,
            default: null,
        })); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
