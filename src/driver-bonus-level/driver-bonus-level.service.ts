
import { DriverBonusLevel } from "./driver-bonus-level.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Tue Aug 18 2020 14:29:12 GMT+0100 (British Summer Time)
 */
@Injectable()
export class DriverBonusLevelService extends TypeOrmCrudService<DriverBonusLevel> {
  constructor(@InjectRepository(DriverBonusLevel) repo) {
    super(repo);
  }
}
