
import { TippingPrices } from "./tipping-prices.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Sep 21 2020 16:20:22 GMT+0100 (British Summer Time)
 */
@Injectable()
export class TippingPricesService extends TypeOrmCrudService<TippingPrices> {
  constructor(@InjectRepository(TippingPrices) repo) {
    super(repo);
  }
}