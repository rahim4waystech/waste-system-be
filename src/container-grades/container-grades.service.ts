
import { ContainerGrades } from "./container-grades.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Feb 04 2021 15:02:00 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class ContainerGradesService extends TypeOrmCrudService<ContainerGrades> {
  constructor(@InjectRepository(ContainerGrades) repo) {
    super(repo);
  }


  async deleteAllForContainer(containerId) {
    if(!containerId || containerId <= -1) {
      throw new Error("you must provide an valid container id in deleteAllForContainer");
    }

    await this.repo.createQueryBuilder()
    .delete()
    .from(ContainerGrades)
    .where("containerId = :id", { id: containerId })
    .execute();
  }
}
