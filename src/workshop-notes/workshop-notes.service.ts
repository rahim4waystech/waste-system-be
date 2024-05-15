
import { WorkshopNotes } from "./workshop-notes.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Dec 15 2020 10:08:49 GMT+0000 (Greenwich Mean Time)
 */
@Injectable()
export class WorkshopNotesService extends TypeOrmCrudService<WorkshopNotes> {
  constructor(@InjectRepository(WorkshopNotes) repo) {
    super(repo);
  }
}