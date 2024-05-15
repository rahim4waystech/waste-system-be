import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { Industry } from './industry.entity';
import { IndustryService } from './industry.service';


@Crud({
    model: {
      type: Industry,
    },
    query: {
      cache: 86400000,
    }
  })
  @Feature('industry')
  @Controller('industry')
export class IndustryController implements CrudController<Industry>{

    constructor(public service: IndustryService) {}

}
