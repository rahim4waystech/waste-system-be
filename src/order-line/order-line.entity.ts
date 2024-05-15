
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Order } from "src/order/order.entity";
import { QuoteLine } from "src/quote-line/quote-line.entity";
import { Unit } from "src/unit/unit.entity";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Aug 10 2020 15:49:18 GMT+0100 (British Summer Time)
 */
@Entity()
export class OrderLine {
  @PrimaryGeneratedColumn() id: number;

  @Column() orderId: number;
  @OneToOne(type => Order) @JoinColumn() order: Order;
  
  @Column() quoteLineId: number;
  @OneToOne(type => QuoteLine) @JoinColumn() quoteLine: QuoteLine;

  @Column({type: 'float'}) qty: number;
  @Column({type: 'float'}) price: number;
  @Column() name: string;


  @OneToOne(type => Unit) @JoinColumn() unit: Unit;
  @Column() unitId: number;
  @Column() isPrimaryCharge: boolean = false;
  @Column() overweight: boolean = false;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 
