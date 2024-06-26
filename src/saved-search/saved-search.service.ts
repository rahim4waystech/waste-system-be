
import { SavedSearch } from "./saved-search.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Apr 16 2021 13:42:24 GMT+0100 (British Summer Time)
 */
@Injectable()
export class SavedSearchService extends TypeOrmCrudService<SavedSearch> {
  constructor(@InjectRepository(SavedSearch) repo) {
    super(repo);
  }
}
