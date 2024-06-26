
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Sat Mar 20 2021 18:56:22 GMT+0000 (Coordinated Universal Time)
 */
@Entity()
export class EmailLog {
  @PrimaryGeneratedColumn() id: number;

  @Column() to: string;
  @Column() from: string;
  @Column({type: 'text'}) content: string;
  @Column() subject: string;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}

