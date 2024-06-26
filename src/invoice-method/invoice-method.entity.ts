
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Wed Sep 23 2020 10:44:27 GMT+0100 (British Summer Time)
 */
@Entity()
export class InvoiceMethod {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 
