
import { Driver } from "./driver.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { DriverService } from "./driver.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Aug 07 2020 21:27:29 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: Driver
    },
    query: {
      join: {
        driverType : {
          eager: true
        },
        depot: {
          eager: true,
        },
        vehicle: {
          eager: true,
        },
        trailer: {
          eager: true,
        }
      }
    }
  })
  @Controller('driver')
  @Feature('driver')
  export class DriverController implements CrudController<Driver> {
    constructor(public service: DriverService) {}
  }