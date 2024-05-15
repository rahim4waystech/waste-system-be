import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { CrudController, Crud, CrudAuth, Feature } from '@nestjsx/crud';
import { UserService } from './user.service';

@Crud({
  model: {
    type: User,
  },
  query: {
    join: {
      userGroup: {
        eager: true
      },
    }
  }
})
@CrudAuth({
  property: 'user',
})
@Feature('user')
@Controller('user') 
export class UserController implements CrudController<User>{

  constructor(public service: UserService) {}



}