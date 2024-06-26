

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Jul 01 2021 12:32:38 GMT+0100 (British Summer Time)
 */
import { Module } from '@nestjs/common';
import { TipTicket } from './tip-ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipTicketService } from './tip-ticket.service';
import { TipTicketController } from './tip-ticket.controller';
import { TipTicketGeneratorService } from './tip-ticket-generator.service';
import { JobModule } from 'src/job/job.module';

@Module({
    imports: [TypeOrmModule.forFeature([TipTicket]), JobModule],
    providers: [TipTicketService, TipTicketGeneratorService],
    exports: [TipTicketService],
    controllers: [TipTicketController],
  })
  export class TipTicketModule {}

