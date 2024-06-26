

/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Oct 26 2021 11:58:46 GMT+0100 (British Summer Time)
 */
import { Module } from '@nestjs/common';
import { InvoiceEmailLog } from './invoice-email-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceEmailLogService } from './invoice-email-log.service';
import { InvoiceEmailLogController } from './invoice-email-log.controller';

@Module({
    imports: [TypeOrmModule.forFeature([InvoiceEmailLog])],
    providers: [InvoiceEmailLogService],
    exports: [InvoiceEmailLogService],
    controllers: [InvoiceEmailLogController],
  })
  export class InvoiceEmailLogModule {}

