
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Account } from "src/account/account.entity";
import { YardTradePricing } from "src/yard-trade-pricing/yard-trade-pricing.entity";
import { Grade } from "src/grade/grade.entity";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Oct 26 2020 14:16:46 GMT+0000 (Greenwich Mean Time)
 */
@Entity()
export class YardTrade {
  @PrimaryGeneratedColumn() id: number;

  @OneToOne(type => Account) @JoinColumn() customer: Account;
  @Column() customerId: number;

  @OneToOne(type => Account) @JoinColumn() depot: Account;
  @Column() depotId: number;

  @Column() typeofTrade: number; //tade in/out
  @Column() vehicleReg: string;
  @Column() ticketNumber: string;
  @Column() poNumber: string;
  @Column({type: 'float'}) grossWeight: number;
  @Column({type: 'float'}) tareWeight: number;
  @Column({type: 'date'}) date: string;

  @Column({type: 'text'}) carriarSignature: string = '';
  @Column({type: 'text'}) carriarSignatureName: string = '';
  @Column({type: 'text'}) tippedSignature: string = '';
  @Column({type: 'text'}) tippedSignatureName: string = '';

  @Column() complianceIssue: boolean = false;
  @Column() complianceNotes: string = '';

  @OneToOne(type => Grade) @JoinColumn() grade: Grade;
  @Column() gradeId: number = -1;

  @OneToMany(() => YardTradePricing, yardTradePricing => yardTradePricing.yardTrade)
  yardTradePricing: YardTradePricing[];

  @Column() isSignedOff: boolean = false;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 