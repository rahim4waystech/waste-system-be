import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AccountRating } from "./account-rating.entity";

@Injectable()
export class AccountRatingService extends TypeOrmCrudService<AccountRating> {
  constructor(@InjectRepository(AccountRating) repo) {
    super(repo);
  }
}