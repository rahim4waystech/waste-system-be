
import { MaterialUplift } from "./material-uplift.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Aug 30 2021 14:07:07 GMT+0100 (British Summer Time)
 */
@Injectable()
export class MaterialUpliftService extends TypeOrmCrudService<MaterialUplift> {
  constructor(@InjectRepository(MaterialUplift) repo) {
    super(repo);
  }

  async deleteAllForOrderId(orderId) {
    if(!orderId || orderId <= -1) {
      throw new Error("you must provide an valid order id in deleteAllForOrderId");
    }

    await this.repo.createQueryBuilder()
    .delete()
    .from(MaterialUplift)
    .where("orderId = :id", { id: orderId })
    .execute();
  }
}
