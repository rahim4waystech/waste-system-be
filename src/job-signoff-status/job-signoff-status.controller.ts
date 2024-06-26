
import { JobSignoffStatus } from "./job-signoff-status.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { JobSignoffStatusService } from "./job-signoff-status.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Fri Sep 11 2020 14:39:05 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: JobSignoffStatus
    },
    query: {
      cache: 86400000,
    }
  })
  @Controller('job-signoff-status')
  @Feature('job-signoff-status')
  export class JobSignoffStatusController implements CrudController<JobSignoffStatus> {
    constructor(public service: JobSignoffStatusService) {}
  }
