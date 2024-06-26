
import { PriceList } from "./price-list.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Apr 19 2021 10:21:17 GMT+0100 (British Summer Time)
 */
@Injectable()
export class PriceListService extends TypeOrmCrudService<PriceList> {
  constructor(@InjectRepository(PriceList) repo) {
    super(repo);
  }
}
