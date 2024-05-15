
import { VehicleSeverity } from "./vehicle-severity.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Aug 07 2020 21:32:36 GMT+0100 (British Summer Time)
 */
@Injectable()
export class VehicleSeverityService extends TypeOrmCrudService<VehicleSeverity> {
  constructor(@InjectRepository(VehicleSeverity) repo) {
    super(repo);
  }
}