
import { OrderLine } from "./order-line.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Aug 10 2020 15:49:18 GMT+0100 (British Summer Time)
 */
@Injectable()
export class OrderLineService extends TypeOrmCrudService<OrderLine> {
  constructor(@InjectRepository(OrderLine) repo) {
    super(repo);
  }


  async deleteOrderLineById(orderLineId) {
    if(!orderLineId || orderLineId <= -1) {
      throw new Error("you must provide an valid order line id in deleteOrderLineById");
    }

    await this.repo.createQueryBuilder()
    .delete()
    .from(OrderLine)
    .where("id = :id", { id: orderLineId })
    .execute();
  }


  async deleteAllForOrderId(orderId) {
    if(!orderId || orderId <= -1) {
      throw new Error("you must provide an valid order id in deleteAllForOrderId");
    }

    await this.repo.createQueryBuilder()
    .delete()
    .from(OrderLine)
    .where("orderId = :id", { id: orderId })
    .execute();
  }

  async getAllOrderLinesForOrderId(orderId) {
    if(!orderId || orderId <= -1) {
      throw new Error("you must provide an valid order id in deleteAllForOrderId");
    }

    return this.repo.find({ where: { orderId: orderId }, relations: ["quoteLine", "quoteLine.product", "unit"] });

  }


  async bulkSaveOrderLines(orderLines: OrderLine[]) {
    if(!orderLines) {
      throw new Error('you must provide orderlines for bulkSaveOrderLines');
    }

    for(let i = 0; i < orderLines.length; i++) {
      const orderLine = orderLines[i];

      orderLines[i] = await this.repo.save(orderLine);
    }

    return orderLines;
  }
}
