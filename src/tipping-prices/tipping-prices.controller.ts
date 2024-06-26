
import { TippingPrices } from "./tipping-prices.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { TippingPricesService } from "./tipping-prices.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Sep 21 2020 16:20:22 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: TippingPrices
    },
    query: {
      join: {
        unit : {
          eager: true
        },
        grade: {
          eager: true,
        },
      }
    }
  })
  @Controller('tipping-prices')
  @Feature('tipping-prices')
  export class TippingPricesController implements CrudController<TippingPrices> {
    constructor(public service: TippingPricesService) {}
  }
