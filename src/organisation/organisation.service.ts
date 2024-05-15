import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Organisation } from './organisation.entity';

@Injectable()
export class OrganisationService extends TypeOrmCrudService<Organisation> {
  constructor(@InjectRepository(Organisation) repo) {
    super(repo);
  }
}