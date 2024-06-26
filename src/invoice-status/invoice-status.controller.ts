
import { InvoiceStatus } from "./invoice-status.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { InvoiceStatusService } from "./invoice-status.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Wed Sep 23 2020 14:13:36 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: InvoiceStatus
    },
    query: {
      cache: 86400000,
    }
  })
  @Controller('invoice-status')
  export class InvoiceStatusController implements CrudController<InvoiceStatus> {
    constructor(public service: InvoiceStatusService) {}
  }
