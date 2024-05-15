import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Permission } from "../permission/permission.entity";
import { User } from "../auth/user.entity";

@Entity()
export class UserGroupPermission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userGroupId: number;

    @Column()
    permissionId: number;

    @OneToOne(type => Permission)
    @JoinColumn({ name: "permissionId" })
    permission: Permission;

    // @ManyToOne(type => User, user => user.userGroupPermissions)
    @JoinColumn({name: 'userGroupId'})
    user: User;

    @CreateDateColumn()
    createdAt: string;
  
    @UpdateDateColumn()
    updatedAt: string;
}