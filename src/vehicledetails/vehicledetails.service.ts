
import { VehicleDetails } from "./vehicledetails.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Wed Nov 25 2020 10:23:21 GMT (British Winter Time)
 */
@Injectable()
export class VehicleDetailsService extends TypeOrmCrudService<VehicleDetails> {
  constructor(@InjectRepository(VehicleDetails) repo) {
    super(repo);
  }

  public async createDTO(dto: any) {
    return await this.repo.save(dto);
  }

}
