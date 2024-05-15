
import { Grade } from "./grade.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { GradeService } from "./grade.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Wed Sep 09 2020 14:50:40 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: Grade
    }
  })
  @Feature('grade')
  @Controller('grade')
  export class GradeController implements CrudController<Grade> {
    constructor(public service: GradeService) {}
  }
