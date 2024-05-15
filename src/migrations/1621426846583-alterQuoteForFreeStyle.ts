import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterQuoteForFreeStyle1621426846583 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        /*
          companyName: string = '';
  contactName: string = '';
  contactTelephone: string = '';
  contactEmail: string = '';
  contactAddressLine1: string = '';
  contactAddressLine2: string = '';
  contactAddressLine3: string = '';
  contactCity: string = '';
  contactCountry: string = '';
  contactPostCode: string = '';
        */

       await queryRunner.addColumn("quote", new TableColumn({
        name: "companyName",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));

    await queryRunner.addColumn("quote", new TableColumn({
        name: "contactName",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));

    await queryRunner.addColumn("quote", new TableColumn({
        name: "contactTelephone",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));

    await queryRunner.addColumn("quote", new TableColumn({
        name: "contactEmail",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));

    await queryRunner.addColumn("quote", new TableColumn({
        name: "contactAddressLine1",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));

    await queryRunner.addColumn("quote", new TableColumn({
        name: "contactAddressLine2",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));

    await queryRunner.addColumn("quote", new TableColumn({
        name: "contactAddressLine3",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));

    await queryRunner.addColumn("quote", new TableColumn({
        name: "contactCity",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));

    await queryRunner.addColumn("quote", new TableColumn({
        name: "contactCountry",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));

    await queryRunner.addColumn("quote", new TableColumn({
        name: "contactPostCode",
        type: "varchar(255)",
        isNullable: true,
        default: null,
    }));




    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
