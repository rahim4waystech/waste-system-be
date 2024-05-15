import { Product } from "src/product/product.entity";
import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class ContractProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    contractId: number;

    @Column()
    productId: number;

    @OneToOne(type => Product)
    @JoinColumn({ name: "productId" })
    product: Product;

    @Column()
    qty: number;

    @Column()
    price: number;

    @CreateDateColumn()
    createdAt: string;
  
    @UpdateDateColumn()
    updatedAt: string;
}