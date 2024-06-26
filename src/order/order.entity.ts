
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { VehicleType } from "src/vehicle-type/vehicle-type.entity";
import { Account } from "src/account/account.entity";
import { OrderStatus } from "src/order-status/order-status.entity";
import { OrderType } from "src/order-type/order-type.entity";
import { Container } from "src/container/container.entity";
import { ContainerSizeType } from "src/container-size-type/container-size-type.entity";
import { SkipOrderType } from "src/skip-order-type/skip-order-type.entity";
import { ContainerType } from "src/container-type/container-type.entity";
import { Grade } from "src/grade/grade.entity";
import { Contract } from "src/contract/contract.entity";
import { ShredderOrderType } from "src/shredder-order-type/shredder-order-type.entity";
import { OrderLine } from "src/order-line/order-line.entity";
import { ShreddingMethod } from "src/shredding-method/shredding-method.entity";
import { User } from "src/auth/user.entity";
/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Aug 10 2020 15:40:35 GMT+0100 (British Summer Time)
 */
@Entity()
export class Order {
  @PrimaryGeneratedColumn() id: number;

  @Column() orderTypeId: number;
  @OneToOne(type => OrderType) @JoinColumn() orderType: OrderType;

  @Column() accountId: number;
  @OneToOne(type => Account) @JoinColumn() account: Account;

  @Column() siteId: number;
  @OneToOne(type => Account) @JoinColumn() site: Account;

  @Column() orderStatusId: number;
  @OneToOne(type => OrderStatus) @JoinColumn() orderStatus: OrderStatus;

  @Column() skipOrderTypeId: number;
  @OneToOne(type => SkipOrderType) @JoinColumn() skipOrderType: SkipOrderType;


  @Column({default: null, nullable: true}) shredderOrderTypeId: number;
  @OneToOne(type => ShredderOrderType​​) @JoinColumn() shredderOrderType: ShredderOrderType;



  @Column({default: null, nullable: true}) shreddingMethodId: number;
  @OneToOne(type => ShreddingMethod​​) @JoinColumn() shreddingMethod: ShreddingMethod;


  @Column() containerSizeTypeId: number;
  @OneToOne(type => ContainerSizeType) @JoinColumn() containerSizeType: ContainerSizeType;

  @Column() containerTypeId: number;
  @OneToOne(type => ContainerType) @JoinColumn() containerType: ContainerType;

  @Column() gradeId: number;
  @OneToOne(type => Grade) @JoinColumn() grade: Grade;


  @Column() tipSiteId: Account;
  @OneToOne(type => Account) @JoinColumn() tipSite: Account;

  @Column() tipUnitId: number = 1;

  @Column() orderAllocated: boolean = false;
  @Column() isPrepaid: boolean = false;

  @Column() contractId: number = -1;
  @OneToOne(type => Contract) @JoinColumn() contract: Contract;

  @Column({type: 'date'}) date: string;
  @Column({type: 'time'}) time: string;
  @Column({type: 'text'}) description: string;
  @Column({type: 'text'}) driverNotes: string;
  @Column() poNumber: string;
  @Column() orderNumber: string;
  @Column() collectionNumber: string;
  @Column() uniqueReference: string;
  @Column() companyName: string;
  @Column() contactName: string;
  @Column() contactTelephone: string;
  @Column() contactEmail: string;
  @Column() contactAddressLine1: string;
  @Column() contactAddressLine2: string;
  @Column() contactAddressLine3: string;
  @Column() contactCity: string;
  @Column() contactCountry: string;
  @Column() contactPostCode: string;
  @Column() sendConfirmationEmail: boolean = false;
  @Column() isContract: boolean = false;
  @Column({type: 'float'}) tipFee: number = 0;
  @Column({type: 'float'}) employeeWageCost: number = 0;
  @Column() suggestedTime:string = '';


  // USED FOR JOB SIGNOFF ONLY DON'T USE THIS OTHERWISE
  @OneToMany(() => OrderLine, orderline => orderline.order)
  orderLines: OrderLine[];

  @Column() createdBy: number;


  @OneToOne(type => User)
  @JoinColumn({ name: "updatedBy" })
  updatedUser: User;
  
  @Column() updatedBy: number = -1;
  
  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}
