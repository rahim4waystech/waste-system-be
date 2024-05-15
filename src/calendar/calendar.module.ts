

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Mar 19 2021 15:48:24 GMT+0000 (Coordinated Universal Time)
 */
import { Module } from '@nestjs/common';
import { Calendar } from './calendar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Calendar])],
    providers: [CalendarService],
    exports: [],
    controllers: [CalendarController],
  })
  export class CalendarModule {}
