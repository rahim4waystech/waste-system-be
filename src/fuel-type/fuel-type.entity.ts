
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Wed Aug 19 2020 11:09:29 GMT+0100 (British Summer Time)
 */
@Entity()
export class FuelType {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 
