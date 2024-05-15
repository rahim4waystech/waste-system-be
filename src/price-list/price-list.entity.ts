
import { Account } from "src/account/account.entity";
import { Unit } from "src/unit/unit.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Apr 19 2021 10:21:17 GMT+0100 (British Summer Time)
 */
@Entity()
export class PriceList {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;

  @Column() accountId: number;

  @OneToOne(type => Account)
  @JoinColumn({ name: "accountId" })
  account: Account;

  @Column() active: boolean;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}
