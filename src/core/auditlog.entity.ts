import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AuditLog {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    transactionId: string;

    @Column()
    userId: number;

    @Column()
    objectId: number;

    @Column()
    objectType: string;

    @Column()
    objectField: string;

    @Column({type: 'text'})
    oldValue: string;

    @Column({type: 'text'})
    newValue: string;

    @Column()
    action: string;

    @CreateDateColumn()
    createdAt: string;
  
    @UpdateDateColumn()
    updatedAt: string;
}