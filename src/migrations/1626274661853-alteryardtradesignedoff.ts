import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alteryardtradesignedoff1626274661853 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("yard_trade", new TableColumn({
            name: "isSignedOff",
            type: "tinyint(2)",
            isNullable: true,
            default: 0, 
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
