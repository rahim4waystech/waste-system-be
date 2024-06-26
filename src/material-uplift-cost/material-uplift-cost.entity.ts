
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jul 09 2021 15:57:45 GMT+0100 (British Summer Time)
 */
@Entity()
export class MaterialUpliftCost {
  @PrimaryGeneratedColumn() id: number;

  @Column() accountId: number = -1;
  @Column() orderId: number = -1;

  @Column() unitId: number = -1;
  @Column() price: number = 0;
  @Column() qty: number = 1;
  @Column() name: string = '';
  @Column() signedOff: boolean = false;
  @Column({type: 'boolean'}) deleted: boolean = false;

  @Column() createdBy: number = -1;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}

