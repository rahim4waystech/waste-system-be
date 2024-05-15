
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Feb 08 2021 10:22:41 GMT+0000 (Greenwich Mean Time)
 */
@Entity()
export class SecondaryVehicleType {
  @PrimaryGeneratedColumn() id: number;
  @Column({nullable:true,default:-1}) vehicleTypeId:number;
  @Column() name: string;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}