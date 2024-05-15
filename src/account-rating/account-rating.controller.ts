import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { AccountRating } from './account-rating.entity';
import { AccountRatingService } from './account-rating.service';

@Crud({
    model: {
      type: AccountRating,
    },
    query: {
      cache: 86400000,
    }
  })
  @Feature('account-rating')
  @Controller('account-rating')
export class AccountRatingController implements CrudController<AccountRating>{

    constructor(public service: AccountRatingService) {}

}
