
import { Sic } from "./sic.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Dec 07 2020 10:55:02 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class SicService extends TypeOrmCrudService<Sic> {
  constructor(@InjectRepository(Sic) repo) {
    super(repo);
  }
}