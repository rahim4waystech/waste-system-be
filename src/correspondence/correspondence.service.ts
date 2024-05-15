
import { Correspondence } from "./correspondence.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Mar 18 2021 12:02:52 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class CorrespondenceService extends TypeOrmCrudService<Correspondence> {
  constructor(@InjectRepository(Correspondence) repo) {
    super(repo);
  }
}
