import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterVehicleForDriver1620983273012 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("vehicle", new TableColumn({
            name: "driverId",
            type: "int(11)",
            isNullable: true,
            default: -1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
