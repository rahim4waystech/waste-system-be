import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { Discussion } from './discussion.entity';
import { DiscussionService } from './discussion.service';

@Crud({
    model: {
      type: Discussion,
    },
    query: {
      join: {
        user: {
          eager: true
        },
      }
    }
  })
  @Feature('discussion')
  @Controller('discussion')
export class DiscussionController implements CrudController<Discussion>{

    constructor(public service: DiscussionService) {}

}
