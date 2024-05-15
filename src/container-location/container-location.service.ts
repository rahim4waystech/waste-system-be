
import { ContainerLocation } from "./container-location.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Tue Aug 18 2020 13:00:54 GMT+0100 (British Summer Time)
 */
@Injectable()
export class ContainerLocationService extends TypeOrmCrudService<ContainerLocation> {
  constructor(@InjectRepository(ContainerLocation) repo) {
    super(repo);
  }
}
