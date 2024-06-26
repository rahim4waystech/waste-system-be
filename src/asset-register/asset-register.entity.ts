
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Account } from "src/account/account.entity";
import { AssetCategory } from "src/asset-category/asset-category.entity";
import { WorkshopSubcontractors } from "src/workshop-subcontractors/workshop-subcontractors.entity";
import { Subcontractor } from "src/subcontractor/subcontractor.entity";
import { Parts } from "src/parts/parts.entity";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 15 2021 08:23:28 GMT+0000 (Greenwich Mean Time)
 */
@Entity()
export class AssetRegister {
  @PrimaryGeneratedColumn() id: number;
  @Column({nullable:true,default:-1}) parentId:number;
  @Column() asset:string;
  @Column() assetSerial:string;
  @Column() make:string;
  @Column() model:string;
  @Column({type:'text'}) description:string;
  @Column({type: 'date', nullable: true, default: null}) dateOfRegistration:string;
  @Column({type: 'date', nullable: true, default: null}) purchaseDate:string;
  @Column({type:'float'}) value:number;
  @Column({nullable:true,default:-1}) categoryId:number;
  @OneToOne(type => AssetCategory) @JoinColumn() category: AssetCategory;
  @Column({nullable:true,default:-1}) partId:number;
  @OneToOne(type => Parts) @JoinColumn() part: Parts;
  @Column() entity:string;
  @Column({nullable:true,default:-1}) entityId:number;
  @Column({nullable:true,default:-1}) depotId: number;
  @OneToOne(type => Account) @JoinColumn() depot: Account;

  @Column({nullable:false,default:true}) active:boolean;

  @Column() createdBy: number;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}
