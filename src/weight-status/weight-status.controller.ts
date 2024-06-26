
import { WeightStatus } from "./weight-status.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { WeightStatusService } from "./weight-status.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Wed Oct 21 2020 10:16:13 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: WeightStatus
    }
  })
  @Controller('weight-status')
  export class WeightStatusController implements CrudController<WeightStatus> {
    constructor(public service: WeightStatusService) {}
  }
