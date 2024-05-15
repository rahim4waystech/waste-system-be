
import { DriverHours } from "./driver-hours.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { DriverHoursService } from "./driver-hours.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Aug 10 2020 09:23:58 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: DriverHours
    },
    query: {
      join: {
        driver : {
          eager: true
        },
      }
    }
  })
  @Feature('driver-hours')
  @Controller('driver-hours')
  export class DriverHoursController implements CrudController<DriverHours> {
    constructor(public service: DriverHoursService) {}
  }