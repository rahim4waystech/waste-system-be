import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { Organisation } from './organisation.entity';
import { OrganisationService } from './organisation.service';

@Crud({
    model: {
      type: Organisation,
    },
  })
  @Feature('organisation')
  @Controller('organisation')
export class OrganisationController implements CrudController<Organisation>{

    constructor(public service: OrganisationService) {}

}
