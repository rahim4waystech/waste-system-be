
import { PriceListOtherItem } from "./price-list-other-item.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Aug 16 2021 10:58:13 GMT+0100 (British Summer Time)
 */
@Injectable()
export class PriceListOtherItemService extends TypeOrmCrudService<PriceListOtherItem> {
  constructor(@InjectRepository(PriceListOtherItem) repo) {
    super(repo);
  }
}