import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { Unit } from './unit.entity';
import { UnitService } from './unit.service';

@Crud({
    model: {
      type: Unit,
    },
    query: {
      cache: 86400000,
    }
  })
  @Feature('unit')
  @Controller('unit')
export class UnitController implements CrudController<Unit>{

    constructor(public service: UnitService) {}

}
