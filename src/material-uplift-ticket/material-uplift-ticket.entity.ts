
import { Account } from "src/account/account.entity";
import { Job } from "src/job/job.entity";
import { Unit } from "src/unit/unit.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Aug 30 2021 14:55:22 GMT+0100 (British Summer Time)
 */
@Entity()
export class MaterialUpliftTicket {
  @PrimaryGeneratedColumn() id: number;

  @Column() accountId: number = -1;
  @OneToOne(type => Account) @JoinColumn() account: Account;

  @Column() jobId: number = -1;
  @OneToOne(type => Job) @JoinColumn() job: Job;

  @Column() unitId: number = -1;
  @OneToOne(type => Unit) @JoinColumn() unit: Unit;

  @Column() price: number = 0;
  @Column() qty: number = 1;
  @Column() name: string = '';
  @Column() signedOff: boolean = false;
  @Column({type: 'boolean'}) deleted: boolean = false;
  @Column() ticketNumber: string = '';
  @Column() supplierInvoiceNumber: string = '';

  @Column() createdBy: number = -1;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}

