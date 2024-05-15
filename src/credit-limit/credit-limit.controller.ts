
import { CreditLimit } from "./credit-limit.entity";
import { Crud, CrudController, Action, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { CreditLimitService } from "./credit-limit.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 08 2021 15:14:31 GMT+0000 (Coordinated Universal Time)
 */
@Crud({
    model: {
      type: CreditLimit
    }
  })
  @Controller('credit-limit')
  @Feature('credit-limit')
  export class CreditLimitController implements CrudController<CreditLimit> {
    constructor(public service: CreditLimitService) {}
  }
