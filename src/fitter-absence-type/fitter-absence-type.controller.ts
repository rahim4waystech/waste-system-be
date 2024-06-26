
import { FitterAbsenceType } from "./fitter-absence-type.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { FitterAbsenceTypeService } from "./fitter-absence-type.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Mar 15 2021 14:50:40 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: FitterAbsenceType
    }
  })
  @Controller('fitter-absence-type')
  export class FitterAbsenceTypeController implements CrudController<FitterAbsenceType> {
    constructor(public service: FitterAbsenceTypeService) {}
  }
