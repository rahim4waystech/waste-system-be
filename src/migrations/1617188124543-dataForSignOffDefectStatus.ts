import {MigrationInterface, QueryRunner, getConnection} from "typeorm";

export class dataForSignOffDefectStatus1617188124543 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into("defect_status")
        .values([
          { name: "Signed off" },
        ])
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
