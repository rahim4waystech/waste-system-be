
import { CorrespondenceType } from "./correspondence-type.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Mar 18 2021 12:07:26 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class CorrespondenceTypeService extends TypeOrmCrudService<CorrespondenceType> {
  constructor(@InjectRepository(CorrespondenceType) repo) {
    super(repo);
  }
}
