
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Permission } from 'src/permission/permission.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  findAll(): Promise<User[]> { 
    return this.repo.find({relations: ['organisation', 'userGroup']});
  }

  getById(id: number): Promise<User> {
    return this.repo.findOne(id, {relations: ['organisation', 'userGroup']});
  }
}