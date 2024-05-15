import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { ContractStatus } from './contract-status.entity';
import { ContractStatusService } from './contract-status.service';


@Crud({
    model: {
      type: ContractStatus,
    },
  })
  @Feature('contract-status')
  @Controller('contract-status')
export class ContractStatusController implements CrudController<ContractStatus>{

    constructor(public service: ContractStatusService) {}

}
