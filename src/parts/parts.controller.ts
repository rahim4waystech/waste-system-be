
import { Parts } from "./parts.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { PartsService } from "./parts.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Mar 18 2021 15:41:11 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: Parts
    },
    query: {
      join: {
        depot: {
          eager: true,
        },
        partCategory: {
          eager: true,
        }
      }
    }
  })
  @Controller('parts')
  export class PartsController implements CrudController<Parts> {
    constructor(public service: PartsService) {}
  }