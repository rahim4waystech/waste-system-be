import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterCustomerDetailsForYardTrade1621512736254 implements MigrationInterface {

    /**
     * 
  @Column() licenceNumber: string = '';
  @Column() carrierLicenceNumber: string = '';
  @Column({type: 'date'}) carrierLicenceExpiryDate: string = '';

     * @param queryRunner 
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("customer_details", new TableColumn({
            name: "licenceNumber",
            type: "varchar(255)",
            isNullable: true,
            default: null,
        }));

        await queryRunner.addColumn("customer_details", new TableColumn({
            name: "carrierLicenceNumber",
            type: "varchar(255)",
            isNullable: true,
            default: null,
        }));

        await queryRunner.addColumn("customer_details", new TableColumn({
            name: "carrierLicenceExpiryDate",
            type: "date",
            isNullable: true,
            default: null,
        }));

        await queryRunner.addColumn("customer_details", new TableColumn({
            name: "wasteCarrier",
            type: "varchar(255)",
            isNullable: true,
            default: null,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
