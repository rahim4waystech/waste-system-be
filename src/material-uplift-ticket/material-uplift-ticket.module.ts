

/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Aug 30 2021 14:55:22 GMT+0100 (British Summer Time)
 */
import { Module } from '@nestjs/common';
import { MaterialUpliftTicket } from './material-uplift-ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialUpliftTicketService } from './material-uplift-ticket.service';
import { MaterialUpliftTicketController } from './material-uplift-ticket.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MaterialUpliftTicket])],
    providers: [MaterialUpliftTicketService],
    exports: [],
    controllers: [MaterialUpliftTicketController],
  })
  export class MaterialUpliftTicketModule {}

