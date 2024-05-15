import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Lead } from "../lead/lead.entity";
import { User } from "../auth/user.entity";
import { LeadStatus } from "../lead-status/lead-status.entity";
import { Account } from "src/account/account.entity";
import { Contact } from "src/contact/contact.entity";

@Entity()
export class Opportunity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  opportunityName: string;

  @Column({type: 'text'})
  description: string;

  @OneToOne(type => LeadStatus)
  @JoinColumn({ name: "statusId" })
  status: LeadStatus = new LeadStatus();


  @Column({nullable:false,default:-1})
  statusId: number; // Again this need to be statusId. We need an endpoint for this will add soon for you.

  @Column({nullable:false,default:-1})
  leadId: number;

  @OneToOne(type => Lead)
  @JoinColumn({ name: "leadId" })
  lead: Lead;

  @OneToOne(type => User)
  @JoinColumn({ name: "ownerId" })
  owner: User;

  @Column() accountId: number;
  @OneToOne(type => Account) @JoinColumn() account: Account;

  @Column() contactId: number;
  @OneToOne(type => Contact) @JoinColumn({ name: "contactId" }) contact: Contact;

  @Column({nullable:false,default:-1})
  ownerId: number;

  @Column({type: 'date'})
  estimatedCloseDate: string;

  @Column({type: 'text'})
  phone: string;

  @Column({type: 'text'})
  email: string;

  @Column({type: 'date',nullable:true,default:null})
  actualClosedDate: string;

  @Column({type: 'float'})
  actualRevenue: number;

  @Column()
  createdBy: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;


}
