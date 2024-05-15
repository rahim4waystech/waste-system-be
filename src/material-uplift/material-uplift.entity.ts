
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Aug 30 2021 14:07:07 GMT+0100 (British Summer Time)
 */
@Entity()
export class MaterialUplift {
  @PrimaryGeneratedColumn() id: number;

  @Column() accountId: number = -1;
  @Column() orderId: number = -1;

  @Column() unitId: number = -1;
  @Column() price: number = 0;
  @Column() qty: number = 1;
  @Column() name: string = '';

  @Column() createdBy: number = -1;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}
