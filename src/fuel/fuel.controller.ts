
import { Fuel } from "./fuel.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { FuelService } from "./fuel.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Thu Aug 20 2020 10:23:36 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: Fuel
    },
    query: {
      join: {
        vehicle : {
          eager: true
        },
      }
    }
  })
  @Controller('fuel')
  @Feature('fuel')
  export class FuelController implements CrudController<Fuel> {
    constructor(public service: FuelService) {}
  }