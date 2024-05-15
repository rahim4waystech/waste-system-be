

/**
 * This file was generated by Four Ways Technology
 *
 * On Sat Mar 20 2021 18:54:52 GMT+0000 (Coordinated Universal Time)
 */
import { Module } from '@nestjs/common';
import { CalendarEvent } from './calendar-event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEventService } from './calendar-event.service';
import { CalendarEventController } from './calendar-event.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CalendarEvent])],
    providers: [CalendarEventService],
    exports: [],
    controllers: [CalendarEventController],
  })
  export class CalendarEventModule {}
