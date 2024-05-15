import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { AccountType } from './account-type.entity';
import { AccountTypeService } from './account-type.service';

@Crud({
    model: {
      type: AccountType,
    },
    query: {
      cache: 86400000,
    }
  })
  @Feature('account-type')
  @Controller('account-type')
export class AccountTypeController implements CrudController<AccountType>{

    constructor(public service: AccountTypeService) {}

}
