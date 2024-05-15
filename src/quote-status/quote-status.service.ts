import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QuoteStatus } from "./quote-status.entity";

@Injectable()
export class QuoteStatusService extends TypeOrmCrudService<QuoteStatus> {
  constructor(@InjectRepository(QuoteStatus) repo) {
    super(repo);
  }
}