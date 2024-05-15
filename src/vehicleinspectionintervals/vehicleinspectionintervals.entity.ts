
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Wed Nov 25 2020 10:23:21 GMT (British Winter Time)
 */
@Entity()
export class VehicleInspectionIntervals {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() number: number;
  @Column() unit: string;
  @Column() unitAbbrev: string;
  @Column() entity: string;
  @Column({nullable:true,default:'#FFFFFF'}) colour: string;
}