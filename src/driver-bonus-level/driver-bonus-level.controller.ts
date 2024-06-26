
import { DriverBonusLevel } from "./driver-bonus-level.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { DriverBonusLevelService } from "./driver-bonus-level.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Tue Aug 18 2020 14:29:12 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: DriverBonusLevel
    }
  })
  @Feature('driver-bonus-level')
  @Controller('driver-bonus-level')
  export class DriverBonusLevelController implements CrudController<DriverBonusLevel> {
    constructor(public service: DriverBonusLevelService) {}
  }
