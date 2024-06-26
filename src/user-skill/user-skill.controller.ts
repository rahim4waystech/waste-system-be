
import { UserSkill } from "./user-skill.entity";
import { Action, Crud, CrudController } from "@nestjsx/crud";
import { Controller, Delete, Param } from "@nestjs/common";
import { UserSkillService } from "./user-skill.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jun 04 2021 13:13:22 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: UserSkill
    }
  })
  @Controller('user-skill')
  export class UserSkillController implements CrudController<UserSkill> {
    constructor(public service: UserSkillService) {}

    @Action('deleteByUser')
    @Delete('deleteByUser/:userId')
    deleteAllByUser(@Param() params) {

      if(!params['userId']) {
        throw new Error('You must supply an id for deleteAllByUser');
      }

      this.service.deleteAllForUser(params['userId']);
      return [];
    }
  }
