
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Tue Aug 11 2020 12:14:24 GMT+0100 (British Summer Time)
 */
@Entity()
export class ContainerType {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 
