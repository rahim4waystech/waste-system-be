
import { AssetCategory } from "./asset-category.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { AssetCategoryService } from "./asset-category.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 15 2021 08:24:01 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: AssetCategory
    }
  })
  @Controller('asset-category')
  export class AssetCategoryController implements CrudController<AssetCategory> {
    constructor(public service: AssetCategoryService) {}
  }
