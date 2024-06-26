
import { Driver } from "./driver.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Fri Aug 07 2020 21:27:29 GMT+0100 (British Summer Time)
 */
@Injectable()
export class DriverService extends TypeOrmCrudService<Driver> {
  constructor(@InjectRepository(Driver) repo) {
    super(repo);
  }

  async getDriverById(driverId:number=-1) {
    return await this.repo.find({
      where: {
        id: driverId,
      }
    }) 
  }
}
