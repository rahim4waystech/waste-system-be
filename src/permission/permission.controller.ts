
import { Permission } from "./permission.entity";
import { Crud, CrudController, Feature } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { PermissionService } from "./permission.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Feb 08 2021 14:33:51 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: Permission
    }
  })
  @Controller('permission')
  @Feature('permissions')
  export class PermissionController implements CrudController<Permission> {
    constructor(public service: PermissionService) {}
  }
