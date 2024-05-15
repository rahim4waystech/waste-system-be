
import { Dashboard } from "./dashboard.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Jan 07 2021 09:37:02 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: Dashboard
    }
  })
  @Feature('dashboard')
  @Controller('dashboard')
  export class DashboardController implements CrudController<Dashboard> {
    constructor(public service: DashboardService) {}
  }