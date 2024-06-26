
import { RecurrenceType } from "./recurrence-type.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { RecurrenceTypeService } from "./recurrence-type.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Feb 25 2021 17:57:35 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: RecurrenceType
    }
  })
  @Controller('recurrence-type')
  export class RecurrenceTypeController implements CrudController<RecurrenceType> {
    constructor(public service: RecurrenceTypeService) {}
  }
