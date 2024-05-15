import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AccountType } from './account-type.entity';

@Injectable()
export class AccountTypeService extends TypeOrmCrudService<AccountType> {
  constructor(@InjectRepository(AccountType) repo) {
    super(repo);
  }
}