
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { DriverChecks } from "src/driver-checks/driver-checks.entity";
import { DriverCheckStatus } from "src/driver-check-status/driver-check-status.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { Driver } from "src/driver/driver.entity";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Aug 07 2020 21:32:36 GMT+0100 (British Summer Time)
 */
@Entity()
export class DriverCheckReports {
  @PrimaryGeneratedColumn() id: number;
  @Column() driverCheckGroupId: number;

  @OneToOne(type => DriverChecks) @JoinColumn({name:'vehicleCheckId'}) vehicleCheck: DriverChecks;
  @Column() vehicleCheckId: number;

  @OneToOne(type => DriverCheckStatus) @JoinColumn({name:'checkStatusId'}) checkStatus: DriverCheckStatus;
  @Column() checkStatusId: number;

  @OneToOne(type => Driver) @JoinColumn() driver: Driver;
  @Column() driverId: number;

  @OneToOne(type => Vehicle) @JoinColumn() vehicle: Vehicle;
  @Column() vehicleId: number;

  @Column() result: boolean;
  @Column() description: string;
  @Column() rejectionNote: string;
  @Column() overRide: string;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}