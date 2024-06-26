
import { Recurrence } from "./recurrence.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Mar 15 2021 15:23:59 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class RecurrenceService extends TypeOrmCrudService<Recurrence> {
  constructor(@InjectRepository(Recurrence) repo) {
    super(repo);
  }
}
