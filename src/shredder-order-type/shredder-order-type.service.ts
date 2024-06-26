
import { ShredderOrderType } from "./shredder-order-type.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Jan 14 2021 11:37:49 GMT+0000 (Coordinated Universal Time)
 */
@Injectable()
export class ShredderOrderTypeService extends TypeOrmCrudService<ShredderOrderType> {
  constructor(@InjectRepository(ShredderOrderType) repo) {
    super(repo);
  }
}
