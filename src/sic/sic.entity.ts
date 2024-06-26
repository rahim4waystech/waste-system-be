
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Dec 07 2020 10:55:02 GMT+0000 (Greenwich Mean Time)
 */
@Entity()
export class Sic {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
  @Column() code: string;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 
