
import { Recurrence } from "./recurrence.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { RecurrenceService } from "./recurrence.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Mar 15 2021 15:23:59 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: Recurrence
    }
  })
  @Controller('recurrence')
  export class RecurrenceController implements CrudController<Recurrence> {
    constructor(public service: RecurrenceService) {}
  }
