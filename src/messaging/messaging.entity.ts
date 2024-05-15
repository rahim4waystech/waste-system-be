
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Mar 16 2021 13:50:02 GMT+0000 (Greenwich Mean Time)
 */
@Entity()
export class Messaging {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}

