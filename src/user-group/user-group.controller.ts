import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { UserGroup } from './user-group.entity';
import { UserGroupService } from './user-group.service';
@Crud({
    model: {
      type: UserGroup,
    },
  })
  @Feature('user-group')
  @Controller('user-group')
export class UserGroupController implements CrudController<UserGroup>{

    constructor(public service: UserGroupService) {}

}
