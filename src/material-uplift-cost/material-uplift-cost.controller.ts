
import { MaterialUpliftCost } from "./material-uplift-cost.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { MaterialUpliftCostService } from "./material-uplift-cost.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jul 09 2021 15:57:45 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: MaterialUpliftCost
    }
  })
  @Controller('material-uplift-cost')
  export class MaterialUpliftCostController implements CrudController<MaterialUpliftCost> {
    constructor(public service: MaterialUpliftCostService) {}
  }