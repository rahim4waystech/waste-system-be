import { Controller, Get, UseInterceptors, Post, Param, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature, CrudAuth, CrudRequestInterceptor, ParsedRequest, CrudRequest } from '@nestjsx/crud';
import { Account } from './account.entity';
import { AccountService } from './account.service';

@Crud({
  model: {
    type: Account,
  },
  query: {
    join: {
      type: {
        eager: true
      },
      industry: {
        eager: true,
      },
      rating: {
        eager: true
      },
      contacts: {
        eager: true
      },
      sepa:{
        eager:true
      }
    }
  }
})
@Feature('account')
@Controller('account')
export class AccountController implements CrudController<Account>{

  constructor(public service: AccountService) { }

  @UseInterceptors(CrudRequestInterceptor)
  @Post('shredder-import')
  async shredderImport(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data) {
    return await this.service.shredderImport(data);
  } 

}
