
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Account } from "src/account/account.entity";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 08 2021 15:14:31 GMT+0000 (Coordinated Universal Time)
 */
@Entity()
export class CreditLimit {
  @PrimaryGeneratedColumn() id: number;

  @Column() accountId: number;
  @Column({type: 'float'}) usedCredit: number = 0.0;
  @Column({type: 'float'}) maxCredit: number = 0.0;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}

