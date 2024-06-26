
import { TimelineTransactionLog } from "./timeline-transaction-log.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { TimelineTransactionLogService } from "./timeline-transaction-log.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Nov 02 2021 16:14:06 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: TimelineTransactionLog
    }
  })
  @Controller('timeline-transaction-log')
  export class TimelineTransactionLogController implements CrudController<TimelineTransactionLog> {
    constructor(public service: TimelineTransactionLogService) {}
  }
