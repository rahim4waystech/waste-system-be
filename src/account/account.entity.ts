import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, Column, ManyToMany, OneToOne, JoinColumn } from 'typeorm';

import { IsNotEmpty } from 'class-validator';
import { Contact } from '../contact/contact.entity';
import { AccountType } from '../account-type/account-type.entity';
import { AccountRating } from '../account-rating/account-rating.entity';
import { Industry } from '../industry/industry.entity';
import { Sepa } from 'src/sepa/sepa.entity';
import { DepotDetails } from 'src/depot-details/depot-details.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parentId: number;

  @Column({nullable:true,default:-1})
  organisationId: number;

  @ManyToMany(type => Contact, contact => contact.accounts)
  contacts: Contact[];

  @IsNotEmpty()
  @Column()
  name: string;


  @Column({type: 'text'})
  accountRef: string;

  @Column({type: 'text'})
  description: string;


  @OneToOne(type => AccountType)
  @JoinColumn({ name: "type_id" })
  type: AccountType;

  @Column({nullable:true,default:-1})
  type_id: number;

  @Column({nullable:true,default:-1})
  sepaId: number;

  @OneToOne(type => Sepa)
  @JoinColumn({ name: "sepaId" })
  sepa: Sepa;

  @OneToOne(type => DepotDetails)
  @JoinColumn({ name: "id" })
  depot: DepotDetails;

  @Column()
  source: string;

  @Column({type: 'float'})
  annualRevenue: number

  @Column()
  employees: number;

  @Column({nullable:true,default:-1})
  industryId: number; // Again had to change to match typeORM syntax

  @OneToOne(type => Industry)
  @JoinColumn({ name: "industryId" })
  industry: Industry;

  @OneToOne(type => AccountRating)
  @JoinColumn({ name: "rating_id" })
  rating: AccountRating;

  @Column({nullable:true,default:-1})
  rating_id: number;

  @Column()
  contact: string;

  @Column()
  notes: string;

  @Column()
  email: string;

  @Column()
  website: string;

  @Column()
  phoneNumber: string;

  @Column()
  billingAddress1: string;

  @Column()
  billingAddress2: string;

  @Column()
  billingCity: string;

  @Column()
  billingCountry: string;

  @Column()
  billingPostCode: string;

  @Column()
  shippingAddress1: string;

  @Column()
  shippingAddress2: string;

  @Column()
  shippingCity: string;

  @Column()
  shippingCountry: string;

  @Column()
  shippingPostCode: string;

  @Column() isOwn: Boolean = false;
  @Column({nullable:true,default:true}) isactive: Boolean;

  @Column({nullable:true,default:-1})
  sicId: number;

  @Column()
  onStop: boolean;

  @Column()
  limitEnabled: boolean;

  @Column()   
  poNumber: string;

  @Column()
  isDepot: boolean = false;

  @Column()
  isTip: boolean = false;

  @Column() 
  logo: string = '';

  @Column()
  createdBy: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

}
