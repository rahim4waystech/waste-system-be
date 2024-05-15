import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, OneToOne, JoinColumn } from "typeorm";
import { Unit } from '../unit/unit.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unitId: number;

    @OneToOne(type => Unit)
    @JoinColumn({ name: "unitId" })
    unit: Unit;
    
    
    @Column()
    name: string;

    @Column()
    displayName: string;

    @Column({type: 'float'})
    price:number;

    @Column()
    active: boolean;

    @Column()
    createdBy: number;

    @CreateDateColumn()
    createdAt: string;
  
    @UpdateDateColumn()
    updatedAt: string;
}