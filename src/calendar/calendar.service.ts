
import { Calendar } from "./calendar.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Mar 19 2021 15:48:24 GMT+0000 (Coordinated Universal Time)
 */
@Injectable()
export class CalendarService extends TypeOrmCrudService<Calendar> {
  constructor(@InjectRepository(Calendar) repo) {
    super(repo);
  }
}
