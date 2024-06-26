
import { DriverJobStatus } from "./driver-job-status.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { DriverJobStatusService } from "./driver-job-status.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 15 2021 12:48:33 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: DriverJobStatus
    },
    query: {
      cache: 86400000,
    }
  })
  @Controller('driver-job-status')
  export class DriverJobStatusController implements CrudController<DriverJobStatus> {
    constructor(public service: DriverJobStatusService) {}
  }
