

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 15 2021 12:51:16 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { DriverJobStatusDetails } from './driver-job-status-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverJobStatusDetailsService } from './driver-job-status-details.service';
import { DriverJobStatusDetailsController } from './driver-job-status-details.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DriverJobStatusDetails])],
    providers: [DriverJobStatusDetailsService],
    exports: [DriverJobStatusDetailsService],
    controllers: [DriverJobStatusDetailsController],
  })
  export class DriverJobStatusDetailsModule {}

