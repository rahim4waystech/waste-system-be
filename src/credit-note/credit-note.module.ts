

/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Aug 10 2021 14:09:57 GMT+0100 (British Summer Time)
 */
import { Module } from '@nestjs/common';
import { CreditNote } from './credit-note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditNoteService } from './credit-note.service';
import { CreditNoteController } from './credit-note.controller';
import { InvoiceItemModule } from 'src/invoice-item/invoice-item.module';
import { CoreModule } from 'src/core/core.module';
import { InvoiceModule } from 'src/invoice/invoice.module';

@Module({
    imports: [TypeOrmModule.forFeature([CreditNote]), CoreModule, InvoiceModule,InvoiceItemModule],
    providers: [CreditNoteService],
    exports: [],
    controllers: [CreditNoteController],
  })
  export class CreditNoteModule {}

