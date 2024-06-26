
import { Invoice } from "src/invoice/invoice.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Oct 26 2021 11:58:46 GMT+0100 (British Summer Time)
 */
@Entity()
export class InvoiceEmailLog {
  @PrimaryGeneratedColumn() id: number;

  @OneToOne(type => Invoice) @JoinColumn() invoice: Invoice;
  @Column() invoiceId: number = -1;

  @Column() date: string = '';
  @Column() toEmail: string = '';
  @Column() createdBy: number = -1;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}

