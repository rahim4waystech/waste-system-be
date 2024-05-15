
import { WorkshopSubcontractors } from "./workshop-subcontractors.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { WorkshopSubcontractorsService } from "./workshop-subcontractors.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Dec 15 2020 10:09:53 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: WorkshopSubcontractors
    }
  })
  @Controller('workshop-subcontractors')
  export class WorkshopSubcontractorsController implements CrudController<WorkshopSubcontractors> {
    constructor(public service: WorkshopSubcontractorsService) {}
  }