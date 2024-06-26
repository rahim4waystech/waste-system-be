

/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Mar 15 2021 10:52:59 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { FitterHours } from './fitter-hours.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FitterHoursService } from './fitter-hours.service';
import { FitterHoursController } from './fitter-hours.controller';

@Module({
    imports: [TypeOrmModule.forFeature([FitterHours])],
    providers: [FitterHoursService],
    exports: [],
    controllers: [FitterHoursController],
  })
  export class FitterHoursModule {}

