
import { InspectionDates } from "./inspection-dates.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Aug 25 2020 13:41:01 GMT+0100 (British Summer Time)
 */
@Injectable()
export class InspectionDatesService extends TypeOrmCrudService<InspectionDates> {
  constructor(@InjectRepository(InspectionDates) repo) {
    super(repo);
  }

  async createDTO(dto: any) {
    return await this.repo.save(dto);
  }
}
