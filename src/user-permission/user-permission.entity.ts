import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Permission } from "../permission/permission.entity";

@Entity()
export class UserPermission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    permissionId: number;

    @OneToOne(type => Permission)
    @JoinColumn({ name: "permissionId" })
    permission: Permission;

    @CreateDateColumn()
    createdAt: string;
  
    @UpdateDateColumn()
    updatedAt: string;
}