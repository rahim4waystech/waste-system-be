import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, OneToOne, JoinColumn } from "typeorm";
import { Product } from '../product/product.entity';

@Entity()
export class QuoteLine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quoteId: number;

    @Column()
    productId: number;

    @OneToOne(type => Product)
    @JoinColumn({ name: "productId" })
    product: Product;

    @Column({type: 'float'})
    qty: number;

    @Column({type: 'float'})
    newPrice: number;

    @Column()
    createdBy: number;

    @CreateDateColumn()
    createdAt: string;
  
    @UpdateDateColumn()
    updatedAt: string;
}