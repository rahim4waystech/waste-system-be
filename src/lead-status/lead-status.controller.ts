import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { LeadStatus } from './lead-status.entity';
import { LeadStatusService } from './lead-status.service';

@Crud({
    model: {
      type: LeadStatus,
    },
  })
  @Controller('lead-status')
  @Feature('lead-status')
export class LeadStatusController implements CrudController<LeadStatus>{

    constructor(public service: LeadStatusService) {}

}
