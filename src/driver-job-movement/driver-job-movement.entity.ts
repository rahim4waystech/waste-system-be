
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Driver } from "src/driver/driver.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { Job } from "src/job/job.entity";

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 15 2021 12:50:28 GMT+0000 (Greenwich Mean Time)
 */
@Entity()
export class DriverJobMovement {
  @PrimaryGeneratedColumn() id: number;
  @Column({nullable: true}) driverId: number;
  @OneToOne(type => Driver) @JoinColumn() driver: Driver;


  @Column({nullable: true}) vehicleId: number;
  @OneToOne(type => Vehicle) @JoinColumn() vehicle: Vehicle;

  @Column() jobId: number;
  @OneToOne(type => Job) @JoinColumn() job: Job;

  
  @Column({type: 'float', nullable: true}) qty: number;
  @Column({type: 'text', nullable: true}) comments: string;
  @Column({type: 'time', nullable: true}) siteStartTime: string;
  @Column({type: 'time', nullable: true}) siteEndTime: string;
  @Column({nullable: true}) travelTime: number;
  @Column({nullable: true}) waitTime: number;
  @Column({nullable: true}) upliftTicketNumber: string;
  @Column({nullable: true}) collectionTicketNumber: string;
  @Column({nullable: true}) tippedTicketNumber: string;
  @Column({nullable: true, type: 'text'}) signature: string;
  @Column({nullable: true}) customerName: string;
  @Column({nullable: true}) tippedSignatureName: string;
  @Column({nullable: true}) ticketNumber: string;
  @Column({nullable: true}) reportTipIssueId: number;
  @Column({nullable:true,default:0}) tipIssueResolved:Boolean;
  @Column({type: 'text', nullable: true}) tipIssueResolution: String
  @Column() createdBy: number;
  @Column({nullable:true,default:0}) siteCheckDone:Boolean;
  @Column({type: 'time', nullable: true}) driverBreakTime: string;
  @Column({type: 'time', nullable: true}) chargeableTime: string;
  @Column() active: boolean = true;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}
