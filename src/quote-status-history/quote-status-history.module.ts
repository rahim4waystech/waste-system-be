

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Feb 25 2021 10:54:03 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { QuoteStatusHistory } from './quote-status-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuoteStatusHistoryService } from './quote-status-history.service';
import { QuoteStatusHistoryController } from './quote-status-history.controller';

@Module({
    imports: [TypeOrmModule.forFeature([QuoteStatusHistory])],
    providers: [QuoteStatusHistoryService],
    exports: [],
    controllers: [QuoteStatusHistoryController],
  })
  export class QuoteStatusHistoryModule {}

