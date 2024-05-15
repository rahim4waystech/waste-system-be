
import { DriverJobMovement } from "./driver-job-movement.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 15 2021 12:50:28 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class DriverJobMovementService extends TypeOrmCrudService<DriverJobMovement> {
  constructor(@InjectRepository(DriverJobMovement) repo) {
    super(repo);
  }

  async getPodsByIds(ids: string) {
    const idsList = ids.split(',');

    const query = this.repo.createQueryBuilder();

    query.whereInIds(ids);

    // return await query.get();

}
}