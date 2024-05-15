
import { ContainerType } from "./container-type.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Tue Aug 11 2020 12:14:24 GMT+0100 (British Summer Time)
 */
@Injectable()
export class ContainerTypeService extends TypeOrmCrudService<ContainerType> {
  constructor(@InjectRepository(ContainerType) repo) {
    super(repo);
  }
}
