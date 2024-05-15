
import { Dashboard } from "./dashboard.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Jan 07 2021 09:37:02 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class DashboardService extends TypeOrmCrudService<Dashboard> {
  constructor(@InjectRepository(Dashboard) repo) {
    super(repo);
  }
}