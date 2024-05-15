
import { Parts } from "./parts.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Mar 18 2021 15:41:11 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class PartsService extends TypeOrmCrudService<Parts> {
  constructor(@InjectRepository(Parts) repo) {
    super(repo);
  }
}
