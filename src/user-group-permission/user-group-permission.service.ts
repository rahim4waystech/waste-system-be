import { UserGroupPermission } from "./user-group-permission.entity";
import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserGroupPermissionService extends TypeOrmCrudService<UserGroupPermission> {
  constructor(@InjectRepository(UserGroupPermission) repo) {
    super(repo);
  }

  async deleteAllForUserGroup(userGroupId) {
    if(!userGroupId || userGroupId <= -1) {
      throw new Error("you must provide an valid user group id in deleteAllForUserGroup");
    }

    await this.repo.createQueryBuilder()
    .delete()
    .from(UserGroupPermission)
    .where("userGroupId = :id", { id: userGroupId })
    .execute();
}


    async getAllPermissionsByUserGroup(userGroupId: number) {
        if(!userGroupId || userGroupId === -1) {
            throw new Error('Must provide a valid user group id in getAllPermissionsByUserGroup');
        }

        return this.repo.find({ where: { userGroupId: userGroupId }, relations: ["permission"] });
    }
}