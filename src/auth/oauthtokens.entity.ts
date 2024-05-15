import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class OAuthToken {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    oAuthClientId: number;

    @Column()
    accessToken: string;

    @Column()
    accessTokenExpiresAt: Date;

    @Column()
    refreshToken: string;

    @Column()
    refreshTokenExpiresAt: Date;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

}