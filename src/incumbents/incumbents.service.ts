
import { Incumbents } from "./incumbents.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Jan 28 2021 10:48:06 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class IncumbentsService extends TypeOrmCrudService<Incumbents> {
  constructor(@InjectRepository(Incumbents) repo) {
    super(repo);
  }
}
