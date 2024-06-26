
import { TrailerStatus } from "./trailer-status.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { TrailerStatusService } from "./trailer-status.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Sep 19 2023 10:34:24 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: TrailerStatus
    }
  })
  @Controller('trailer-status')
  export class TrailerStatusController implements CrudController<TrailerStatus> {
    constructor(public service: TrailerStatusService) {}
  }
