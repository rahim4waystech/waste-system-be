
import { DriverType } from "./driver-type.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Fri Aug 07 2020 21:32:36 GMT+0100 (British Summer Time)
 */
@Injectable()
export class DriverTypeService extends TypeOrmCrudService<DriverType> {
  constructor(@InjectRepository(DriverType) repo) {
    super(repo);
  }
}
