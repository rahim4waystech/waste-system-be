
import { TipDetails } from "./tip-details.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { TipDetailsService } from "./tip-details.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Oct 05 2020 14:08:07 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: TipDetails
    }
  })
  @Controller('tip-details')
  @Feature('tipping-details')
  export class TipDetailsController implements CrudController<TipDetails> {
    constructor(public service: TipDetailsService) {}
  }
