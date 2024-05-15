
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { Driver } from "src/driver/driver.entity";
import { Subcontractor } from "src/subcontractor/subcontractor.entity";
import { Account } from "src/account/account.entity";
import { Job } from "src/job/job.entity";
import { Recurrence } from "src/recurrence/recurrence.entity";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Aug 25 2020 13:47:39 GMT+0100 (British Summer Time)
 */
@Entity()
export class JobAssignment {
  @PrimaryGeneratedColumn() id: number;

  @OneToOne(type => Vehicle) @JoinColumn() vehicle: Vehicle;
  @Column({nullable:true,default:-1}) vehicleId: number;

  @OneToOne(type => Vehicle) @JoinColumn() trailer: Vehicle;
  @Column({nullable:true,default:-1}) trailerId: number;

  @OneToOne(type => Driver) @JoinColumn() driver: Driver;
  @Column({nullable:true,default:-1}) driverId: number;

  @OneToOne(type => Subcontractor) @JoinColumn() subcontractor: Subcontractor;
  @Column({nullable:true,default:-1}) subcontractorId: number;

  @OneToOne(type => Account) @JoinColumn() depot: Account;
  @Column({nullable:true,default:-1}) depotId: number;

  @Column({nullable:true,default:-1}) skipRoundId: number;


  @Column({nullable: true, default: -1}) orderTypeId: number = -1;

  @Column() name: string = '';

  @Column({type: 'date'}) date: string;
  @Column() slotNumber: number;
  @Column() driverStartTime: string;

  @Column() recurrenceId: number;
  @OneToOne(type => Recurrence) @JoinColumn() recurrence: Recurrence;

  @Column() createdBy: number;

  @Column() notes: string='';

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}
