import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { QuoteStatus } from './quote-status.entity';
import { QuoteStatusService } from './quote-status.service';

@Crud({
    model: {
      type: QuoteStatus,
    },
  })
  @Feature('quote-status')
  @Controller('quote-status')
export class QuoteStatusController implements CrudController<QuoteStatus>{

    constructor(public service: QuoteStatusService) {}

}
