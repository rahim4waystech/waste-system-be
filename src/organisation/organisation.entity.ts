import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";

@Entity()
export class Organisation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: 'text'})
    description: string;

    @Column()
    contactName: string;

    @Column()
    address1: string;
  
    @Column()
    address2: string;
  
    @Column()
    city: string;
  
    @Column()
    country: string;
  
    @Column()
    postCode: string;

    @Column()
    phoneNumber: string;

    @Column()
    website: string;

    @Column()
    email: string;


    // Customisable settings
    @Column({type: 'text'})
    logo: string

    @Column()
    primaryColour: string;

    @Column()
    SecondaryColour: string;

    @Column()
    tertiaryColour: string;

    @Column()
    fontColour: string;
    

    @CreateDateColumn()
    createdAt: string;
  
    @UpdateDateColumn()
    updatedAt: string;
}