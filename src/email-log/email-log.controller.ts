
import { EmailLog } from "./email-log.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { EmailLogService } from "./email-log.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Sat Mar 20 2021 18:56:22 GMT+0000 (Coordinated Universal Time)
 */
@Crud({
    model: {
      type: EmailLog
    }
  })
  @Controller('email-log')
  export class EmailLogController implements CrudController<EmailLog> {
    constructor(public service: EmailLogService) {}
  }
