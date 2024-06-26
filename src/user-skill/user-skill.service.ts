
import { UserSkill } from "./user-skill.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jun 04 2021 13:13:22 GMT+0100 (British Summer Time)
 */
@Injectable()
export class UserSkillService extends TypeOrmCrudService<UserSkill> {
  constructor(@InjectRepository(UserSkill) repo) {
    super(repo);
  }

  async deleteAllForUser(userId: number) {
    if(!userId || userId <= -1) {
      throw new Error("you must provide an valid user id in deleteAllForUser");
    }

    await this.repo.createQueryBuilder()
    .delete()
    .from(UserSkill)
    .where("userId = :id", { id: userId })
    .execute();
}
}
