import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QuoteLine } from './quote-line.entity';

@Injectable()
export class QuoteLineService extends TypeOrmCrudService<QuoteLine> {
  constructor(@InjectRepository(QuoteLine) repo) {
    super(repo);
  }

  async getAllLinesByQuoteId(id: number) {
    if(!id || id === -1) {
      throw new Error('You must provide a valid id for getAllLinesByQuoteId');
    }

    return await this.repo.find({
      where: [
        {
          quoteId: id
        }
      ],
      relations: [
        'product',
        'product.unit'
      ]
    })
  }
}