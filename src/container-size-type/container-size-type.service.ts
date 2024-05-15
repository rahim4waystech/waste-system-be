
import { ContainerSizeType } from "./container-size-type.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Tue Aug 11 2020 12:14:45 GMT+0100 (British Summer Time)
 */
@Injectable()
export class ContainerSizeTypeService extends TypeOrmCrudService<ContainerSizeType> {
  constructor(@InjectRepository(ContainerSizeType) repo) {
    super(repo);
  }
}