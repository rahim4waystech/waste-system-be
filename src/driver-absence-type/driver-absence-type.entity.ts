
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Sun Aug 09 2020 14:33:06 GMT+0100 (British Summer Time)
 */
@Entity()
export class DriverAbsenceType {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 
