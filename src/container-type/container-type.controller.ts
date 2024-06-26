
import { ContainerType } from "./container-type.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { ContainerTypeService } from "./container-type.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Tue Aug 11 2020 12:14:24 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: ContainerType
    }
  })
  @Feature('container-type')
  @Controller('container-type')
  export class ContainerTypeController implements CrudController<ContainerType> {
    constructor(public service: ContainerTypeService) {}
  }
