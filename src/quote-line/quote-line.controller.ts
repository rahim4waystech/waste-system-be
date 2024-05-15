import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { QuoteLine } from './quote-line.entity';
import { QuoteLineService } from './quote-line-service';

@Crud({
    model: {
      type: QuoteLine,
    },
    query: {
        join: {
          product: {
            eager: true
          },
          'product.unit': {
            eager: true,
          }
        }
      }
  })
  @Feature('quote-line')
  @Controller('quote-line')
export class QuoteLineController implements CrudController<QuoteLine>{

    constructor(public service: QuoteLineService) {}

}
