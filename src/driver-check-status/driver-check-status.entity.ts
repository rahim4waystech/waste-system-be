
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Mar 25 2021 13:45:53 GMT+0000 (Greenwich Mean Time)
 */
@Entity()
export class DriverCheckStatus {
  @PrimaryGeneratedColumn() id: number;

  @Column() name:string;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}