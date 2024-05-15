
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { DriverType } from "src/driver-type/driver-type.entity";
import { Account } from "src/account/account.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Aug 07 2020 21:27:29 GMT+0100 (British Summer Time)
 */
@Entity()
export class Driver {
  @PrimaryGeneratedColumn() id: number;

  @Column({nullable:true,default:-1}) driverTypeId: number;
  @OneToOne(type => DriverType) @JoinColumn() driverType: DriverType;

  @Column({nullable:true,default:-1}) depotId: number;
  @OneToOne(type => Account) @JoinColumn() depot: Account;

  @Column({nullable:true,default:-1}) vehicleId: number;
  @OneToOne(type => Vehicle) @JoinColumn() vehicle: Vehicle;

  @Column({nullable:true,default:-1}) trailerId: number;
  @OneToOne(type => Vehicle) @JoinColumn() trailer: Vehicle;

  @Column({nullable:true,default:-1}) driverBonusLevelId: number;

  @Column() firstName: string;
  @Column() middleName: string;
  @Column() lastName: string;
  @Column() contact: string;
  @Column() workNumber: string;


  @Column() employeeNumber: string;
  @Column() active: boolean;
  @Column() notes: string;

  @Column() createdBy: number;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}
