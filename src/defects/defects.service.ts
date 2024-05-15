
import { Defects } from "./defects.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Dec 15 2020 09:22:35 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class DefectsService extends TypeOrmCrudService<Defects> {
  constructor(@InjectRepository(Defects) repo) {
    super(repo);
  }
}