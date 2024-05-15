import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, JoinColumn, OneToOne } from 'typeorm';
import { Account } from "../account/account.entity";
import { ContactRole } from '../contact-role/contact-role.entity';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    organisationId: number;

    @JoinTable()
    @ManyToMany(type => Account , account => account.contacts, {
        cascade: true
    })
    accounts: Account[];

    @Column()
    title: string;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    jobTitle: string;

    @Column()
    businessPhone: string;

    @OneToOne(type => ContactRole)
    @JoinColumn({ name: "roleId" })
    role: ContactRole;

    @Column()
    roleId: string;

    @Column()
    homePhone: string;

    @Column()
    mobile: string;

    @Column()
    fax: string;

    @Column()
    email: string;

    @Column()
    address1: string;

    @Column()
    address2: string;

    @Column()
    address3: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    postCode: string;

    @Column({type: 'text'})
    remarks: string;

    @Column()
    status: number;

    @Column()
    companyName: string;

    @Column()
    createdBy: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
