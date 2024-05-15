import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Quote } from './quote.entity';

@Injectable()
export class QuoteService extends TypeOrmCrudService<Quote> {
  constructor(@InjectRepository(Quote) repo) {
    super(repo);
  }

  async getQuoteById(id: number) {
    if(!id || id === -1) {
      throw new Error('Quote must have a valid id');
    }

    return await this.repo.findOne(id, {relations: ['account']}); 
  }
}