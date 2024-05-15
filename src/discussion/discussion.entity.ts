import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { AccountRating } from "../account-rating/account-rating.entity";
import { User } from '../auth/user.entity';

@Entity()
export class Discussion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    message: string;

    @Column({type: 'text'})
    entityType: string;

    @Column()
    entityId: number;

    @Column()
    parentId: number;

    @Column()
    createdBy: number;

    @OneToOne(type => User)
    @JoinColumn({ name: "createdBy" })
    user: User;


    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
