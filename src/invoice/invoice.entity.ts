
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { InvoiceStatus } from "src/invoice-status/invoice-status.entity";
import { Account } from "src/account/account.entity";
import { OrderType } from "src/order-type/order-type.entity";
import { TaxType } from "src/tax-type/tax-type.entity";
import { InvoicePeriod } from "src/invoice-period/invoice-period.entity";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Wed Sep 23 2020 14:21:52 GMT+0100 (British Summer Time)
 */
@Entity()
export class Invoice {
  @PrimaryGeneratedColumn() id: number;

  @OneToOne(type => InvoiceStatus) @JoinColumn() invoiceStatus: InvoiceStatus;
  @Column() invoiceStatusId: number;

  @Column() batchId: number;

  @Column() ticketType: number = 1;
  @Column() confirmation: boolean = false;
  
  @OneToOne(type => Account) @JoinColumn() account: Account;
  @Column() accountId: number;
  
  @OneToOne(type => Account) @JoinColumn() site: Account;
  @Column() siteId: number;
  
  @OneToOne(type => OrderType) @JoinColumn() orderType: OrderType;
  @Column() orderTypeId: number;
  
  @OneToOne(type => TaxType) @JoinColumn() taxType: TaxType;
  @Column() taxTypeId: number;
  
  @OneToOne(type => InvoicePeriod) @JoinColumn() invoicePeriod: InvoicePeriod;
  @Column() invoicePeriodId: number;
  
  @Column() poNumber: string;

  @Column({type: 'date'}) invoiceDate: string;
  @Column() posted: boolean;
  @Column({type: 'date'}) postedDate: string;
  @Column() emailed: boolean;
  @Column({type: 'date'}) emailedDate: string;

  @Column() loadEx: string = '';

  @Column() createdBy: number;
  @Column() isAdditionalCharge: boolean = false;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 