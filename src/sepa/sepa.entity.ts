import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, Column, ManyToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Sepa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  code: String;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

}
