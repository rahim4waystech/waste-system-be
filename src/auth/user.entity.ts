
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, BeforeInsert, BeforeUpdate, getConnection } from 'typeorm';
import { Organisation } from '../organisation/organisation.entity';
import { UserGroup } from '../user-group/user-group.entity';
import { UserGroupPermission } from '../user-group-permission/user-group-permission.entity';
import { createHmac } from 'crypto';

const bcrypt = require('bcrypt');
import { WSCache } from './../core/cache.service';


/* test entity to show typeorm at work */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organisationId: number;

  @OneToOne(type => Organisation)
  @JoinColumn({ name: "organisationId" })
  organisation: Organisation;


  @Column()
  userGroupId: number;

  @OneToOne(type => UserGroup)
  @JoinColumn({ name: "userGroupId" })
  userGroup: UserGroup;


  // @OneToMany(type => UserGroupPermission, userGroupPermission => userGroupPermission.user)
  // @JoinColumn({ name: 'userGroupId' })
  // userGroupPermissions: UserGroupPermission[];


  // Email is username
  @Column()
  email: string;

  @Column({type: 'text'})
  password: string;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column({nullable: true, default:-1})
  driverId: number;

  @Column({nullable: true, default:-1})
  fitterId: number;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {

    // Hack hack hack sort please.
    let oldUser = null;
    if(this.id !== -1 && this.id) {
      const query = getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where('id = :id', {id: this.id})

      oldUser = await query.getOne();
    }

    if (this.password && this.password !== '') {
      // Try this may need to async it
      this.password = bcrypt.hashSync(this.password, 10);
    } else if(oldUser !== null) {
      this.password = oldUser.password;
    }
  }
}
