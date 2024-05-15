
import { User } from "src/auth/user.entity";
import { CorrespondenceType } from "src/correspondence-type/correspondence-type.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { EmailLog } from "src/email-log/email-log.entity";
/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Mar 18 2021 12:02:52 GMT+0000 (Greenwich Mean Time)
 */
@Entity()
export class Correspondence {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  correspondenceTypeId: number;
  @OneToOne(type => CorrespondenceType) @JoinColumn() correspondenceType: CorrespondenceType;

  @Column()
  emailLogId: number;
  @OneToOne(type => EmailLog) @JoinColumn() emailLog: EmailLog;

  @Column() calendarId: number = -1;
  @Column({type: 'date'}) date: string;
  @Column() entity: string;
  @Column() entityId: number;
  @Column() subject: string;
  @Column() description: string;

  @OneToOne(type => User) @JoinColumn({name: 'createdBy'}) user: User;
  @Column() createdBy: number;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}

