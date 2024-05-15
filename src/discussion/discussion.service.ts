import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Discussion } from './discussion.entity';

@Injectable()
export class DiscussionService extends TypeOrmCrudService<Discussion> {
  constructor(@InjectRepository(Discussion) repo) {
    super(repo);
  }
}