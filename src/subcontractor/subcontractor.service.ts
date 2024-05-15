
import { Subcontractor } from "./subcontractor.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Fri Aug 14 2020 16:15:01 GMT+0100 (British Summer Time)
 */
@Injectable()
export class SubcontractorService extends TypeOrmCrudService<Subcontractor> {
  constructor(@InjectRepository(Subcontractor) repo) {
    super(repo);
  }
}