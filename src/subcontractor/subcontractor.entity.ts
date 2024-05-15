
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Fri Aug 14 2020 16:15:01 GMT+0100 (British Summer Time)
 */
@Entity()
export class Subcontractor {
  @PrimaryGeneratedColumn() id: number;

  @Column({nullable: true, default: -1}) parentId: number;
  @Column({nullable: true, default: 1}) subcontractorTypeId: number;

  @Column() name: string; 
  @Column({type: 'text'}) notes: string;

  @Column() contactName: string;
  @Column() contactTelephone: string;
  @Column() contactEmail: string;
  @Column() contactAddressLine1: string;
  @Column() contactAddressLine2: string;
  @Column() contactAddressLine3: string;
  @Column() contactCity: string;
  @Column() contactCountry: string;
  @Column() contactPostCode: string;

  @Column() licenceNumber: string = '';
  @Column() carrierLicenceNumber: string = '';
  @Column() carrierLicenceExpiryDate: string = ''; 

  @Column() createdBy: number = -1;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 
