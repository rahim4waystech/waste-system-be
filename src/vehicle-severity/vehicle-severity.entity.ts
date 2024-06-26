
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Aug 07 2020 21:32:36 GMT+0100 (British Summer Time)
 */
@Entity()
export class VehicleSeverity {
  @PrimaryGeneratedColumn() id: number;
  @Column() severity: number;
  @Column() isVor: boolean;
  @Column() notes: string;
  @Column() createdBy:number;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}
