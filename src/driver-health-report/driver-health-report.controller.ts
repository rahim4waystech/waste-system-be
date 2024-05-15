
import { DriverHealthReport } from "./driver-health-report.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { DriverHealthReportService } from "./driver-health-report.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Jan 19 2021 13:13:30 GMT+0000 (Coordinated Universal Time)
 */
@Crud({
    model: {
      type: DriverHealthReport
    }
  })
  @Controller('driver-health-report')
  export class DriverHealthReportController implements CrudController<DriverHealthReport> {
    constructor(public service: DriverHealthReportService) {}
  }