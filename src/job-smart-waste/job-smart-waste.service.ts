
import { JobSmartWaste } from "./job-smart-waste.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Wed May 05 2021 10:14:21 GMT+0100 (British Summer Time)
 */
@Injectable()
export class JobSmartWasteService extends TypeOrmCrudService<JobSmartWaste> {
  constructor(@InjectRepository(JobSmartWaste) repo) {
    super(repo);
  }
}
