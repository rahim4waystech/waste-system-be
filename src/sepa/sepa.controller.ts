import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature, CrudAuth } from '@nestjsx/crud';
import { Sepa } from './sepa.entity';
import { SepaService } from './sepa.service';

@Crud({
  model: {
    type: Sepa,
  }
})
@Controller('sepa')
@Feature('sepa')
export class SepaController implements CrudController<Sepa>{

  constructor(public service: SepaService) { }

}
