

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 15 2021 12:48:33 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { DriverJobStatus } from './driver-job-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverJobStatusService } from './driver-job-status.service';
import { DriverJobStatusController } from './driver-job-status.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DriverJobStatus])],
    providers: [DriverJobStatusService],
    exports: [],
    controllers: [DriverJobStatusController],
  })
  export class DriverJobStatusModule {}

