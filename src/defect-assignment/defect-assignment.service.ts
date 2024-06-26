
import { DefectAssignment } from "./defect-assignment.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Dec 15 2020 10:09:19 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class DefectAssignmentService extends TypeOrmCrudService<DefectAssignment> {
  constructor(@InjectRepository(DefectAssignment) repo) {
    super(repo);
  }

  async getAllAssignmentsByDate(date:string) {
    if(!date || date === '') {
      throw new Error('You must supply a date for getAllAssignmentsByDate');
    }

    return await this.repo.find({
      where: {
        date: date,
      }
    })
  }

  async saveDTO(dto) {
    return this.repo.save(dto);
  }
}
