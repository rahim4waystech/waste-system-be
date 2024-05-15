import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { LeadStatus } from './lead-status.entity';

@Injectable()
export class LeadStatusService extends TypeOrmCrudService<LeadStatus> {
  constructor(@InjectRepository(LeadStatus) repo) {
    super(repo);
  }
}