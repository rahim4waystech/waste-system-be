import { UserGroupPermission } from "./user-group-permission.entity";
import { UserGroupPermissionService } from "./user-group-permission.service";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Crud, CrudController, Feature, Action } from "@nestjsx/crud";
import { Delete, Param } from "@nestjs/common";

@Crud({
    model: {
      type: UserGroupPermission
    },
    query: {
        join: {
            permission: {
                eager: false,
            }
        }
    }
  })
  @Controller('user-group-permission')
  @Feature('user-group-permissions')
  export class UserGroupPermissionController implements CrudController<UserGroupPermission> {
    constructor(public service: UserGroupPermissionService) {}

    @Action('deleteByUserGroup')
    @Delete('deleteByUserGroup/:userGroupId')
    deleteAllByUserGroup(@Param() params) {

      if(!params['userGroupId']) {
        throw new Error('You must supply an id for deleteAllByUserGroup');
      }

      this.service.deleteAllForUserGroup(params['userGroupId']);
      return [];
    }
  }
