
import { ReportTipIssue } from "./report-tip-issue.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Jan 19 2021 10:41:46 GMT+0000 (Coordinated Universal Time)
 */
@Injectable()
export class ReportTipIssueService extends TypeOrmCrudService<ReportTipIssue> {
  constructor(@InjectRepository(ReportTipIssue) repo) {
    super(repo);
  }
}
