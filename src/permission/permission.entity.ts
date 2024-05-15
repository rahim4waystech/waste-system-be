import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { PermissionArea } from "../permission-area/permission-area.entity";

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    permissionAreaId: number;

    @OneToOne(type => PermissionArea)
    @JoinColumn({ name: "permissionAreaId" })
    permissionArea: PermissionArea;

    @Column({type: 'text'})
    components: string;
    
    @Column({type: 'text'})
    apis: string

    @Column()
    createdBy: number;

    @CreateDateColumn()
    createdAt: string;
  
    @UpdateDateColumn()
    updatedAt: string;
}
