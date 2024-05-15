import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserGroup } from './user-group.entity';

@Injectable()
export class UserGroupService extends TypeOrmCrudService<UserGroup> {
  constructor(@InjectRepository(UserGroup) repo) {
    super(repo);
  }
}