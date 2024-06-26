
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Vehicle } from "src/vehicle/vehicle.entity";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Thu Aug 20 2020 10:23:36 GMT+0100 (British Summer Time)
 */
@Entity()
export class Fuel {
  @PrimaryGeneratedColumn() id: number;

  @Column() vehicleId: number = -1;
  @OneToOne(type => Vehicle) @JoinColumn() vehicle: Vehicle;

  @Column({type: 'float'}) fuel: number = 0;
  @Column({type: 'float'}) mileage: number = 0;
  @Column({type: 'date'}) date: string = '';
  @Column({type: 'text'}) notes: string = '';

  @Column() createdBy: number;
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string; 

}    
 
