
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Account } from "src/account/account.entity";
import { Driver } from "src/driver/driver.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { SubcontractorService } from "src/subcontractor/subcontractor.service";
import { Subcontractor } from "src/subcontractor/subcontractor.entity";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Aug 25 2020 14:01:30 GMT+0100 (British Summer Time)
 */
@Entity()
export class SkipRound {
  @PrimaryGeneratedColumn() id: number;

  @OneToOne(type => Vehicle) @JoinColumn() vehicle: Vehicle;
  @Column() vehicleId: number;

  @OneToOne(type => Vehicle) @JoinColumn() trailer: Vehicle;
  @Column() trailerId: number;

  @OneToOne(type => Driver) @JoinColumn() driver: Driver;
  @Column() driverId: number;

  @OneToOne(type => Account) @JoinColumn() depot: Account;
  @Column() depotId: number;

  @OneToOne(type => Subcontractor) @JoinColumn() subcontractor: Subcontractor;
  @Column() subcontractorId: number;

  @Column() name: string;
  @Column({type: 'date'}) date: string;
  @Column() driverStartTime: string;
  @Column() carryOver: boolean;

  @Column() createdBy: number;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}