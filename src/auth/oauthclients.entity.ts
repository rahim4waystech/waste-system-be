import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class OAuthClient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    clientId: string;

    @Column({ length: 255 })
    clientSecret: string;

    @Column({ type: "text" })
    grants: string;

    @Column({type: 'text'})
    redirectUris: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

}