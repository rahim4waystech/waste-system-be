
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Mar 09 2021 13:12:02 GMT+0000 (Greenwich Mean Time)
 */
@Entity()
export class ShreddingMethod {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}

