import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, OneToOne, JoinColumn, OneToMany } from "typeorm";
//import { Opportunity } from '../../../../crm2019/src/app/opportunities/models/opportunities.model';
//import { Lead } from "../lead/lead.entity";
import { QuoteLine } from "../quote-line/quote-line.entity";
import { Account } from "src/account/account.entity";
import { QuoteStatus } from "src/quote-status/quote-status.entity";
import { Recurrence } from "src/recurrence/recurrence.entity";

@Entity()
export class Quote {
    @PrimaryGeneratedColumn()
    id: number;


   @OneToOne(type => Account)
   @JoinColumn({ name: "accountId" })
    account: Account;

    @Column()
    accountId: number;

    @Column()
    leadId: number;

   @OneToOne(type => QuoteStatus)
   @JoinColumn({ name: "statusId" })
    quoteStatus: QuoteStatus;

    @Column()
    opportunityId: number;

    // @OneToOne(type => Opportunity)
    // @JoinColumn({ name: "opportunityId" })
    // opportunity: Opportunity;

    @Column()
    statusId: number;

    @Column()
    name: string;

    @Column()
    quoteNumber: string;

    @Column({type: 'text'})
    description: string;

    @Column({type: 'date',nullable:true,default:null})
    validFrom: string;

    @Column({type: 'date',nullable:true,default:null})
    validTo: string;

    @Column({type: 'date'})
    closedOn: string;

    @Column({type: 'float'})
    discountAmount: number;

    @Column() recurrenceId: number;
    @OneToOne(type => Recurrence) @JoinColumn() recurrence: Recurrence;

    @Column() companyName: string;
    @Column() contactName: string;
    @Column() contactTelephone: string;
    @Column() contactEmail: string;
    @Column() contactAddressLine1: string;
    @Column() contactAddressLine2: string;
    @Column() contactAddressLine3: string;
    @Column() contactCity: string;
    @Column() contactCountry: string;
    @Column() contactPostCode: string;

    @Column()
    createdBy: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
