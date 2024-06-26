
import { SkipOrderType } from "./skip-order-type.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { SkipOrderTypeService } from "./skip-order-type.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Aug 17 2020 15:45:08 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: SkipOrderType
    }
  })
  @Feature('skip-order-type')
  @Controller('skip-order-type')
  export class SkipOrderTypeController implements CrudController<SkipOrderType> {
    constructor(public service: SkipOrderTypeService) {}
  }
