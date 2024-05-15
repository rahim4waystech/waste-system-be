import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Industry } from './industry.entity';

@Injectable()
export class IndustryService extends TypeOrmCrudService<Industry> {
  constructor(@InjectRepository(Industry) repo) {
    super(repo);
  }
}