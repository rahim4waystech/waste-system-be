
import { ShreddingMethod } from "./shredding-method.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Mar 09 2021 13:12:02 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class ShreddingMethodService extends TypeOrmCrudService<ShreddingMethod> {
  constructor(@InjectRepository(ShreddingMethod) repo) {
    super(repo);
  }
}
