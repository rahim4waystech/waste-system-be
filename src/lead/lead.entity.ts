import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from '../auth/user.entity';
import { Contact } from '../contact/contact.entity';
import { Account } from '../account/account.entity';
import { AccountRating } from '../account-rating/account-rating.entity';
import { LeadStatus } from '../lead-status/lead-status.entity';
import { AccountType } from "src/account-type/account-type.entity";

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  subject: string;

  @Column({type: 'float'})
  estimatedRevenue: number;

  @OneToOne(type => User)
  @JoinColumn({ name: "ownerId" })
  owner: User;

  @Column({nullable:true,default:-1})
  ownerId: number;

  @OneToOne(type => Account)
  @JoinColumn({ name: "accountId" })
  account: Account;

  @Column() contactId: number;

  @OneToOne(type => Contact)
  @JoinColumn({ name: "contactId" })
  contact: Contact;

  @Column({type: 'text'})
  phone: string;

  @Column({type: 'text'})
  email: string;

  @Column()
  leadSource: string;

  @Column({nullable:true,default:-1})
  accountId: number;

  @Column({nullable:true,default:-1})
  typeId: number; // Sorry had to change this, as needed type property for object. So you'll need to change your db column.

  @OneToOne(type => AccountType)
  @JoinColumn({ name: "typeId" })
  type: AccountType;

  @Column({nullable:true,default:-1})
  statusId: number;

  @OneToOne(type => LeadStatus)
  @JoinColumn({ name: "statusId" })
  status: LeadStatus;


  @Column({type: 'text'})
  leadNotes: string;

  @Column()
  createdBy: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
