

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Feb 19 2021 12:50:01 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { DefectJob } from './defect-job.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefectJobService } from './defect-job.service';
import { DefectJobController } from './defect-job.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DefectJob])],
    providers: [DefectJobService],
    exports: [DefectJobService],
    controllers: [DefectJobController],
  })
  export class DefectJobModule {}
