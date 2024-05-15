
import { AccountIncumbent } from "./account-incumbent.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Jan 28 2021 10:45:15 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class AccountIncumbentService extends TypeOrmCrudService<AccountIncumbent> {
  constructor(@InjectRepository(AccountIncumbent) repo) {
    super(repo);
  }
}