

/**
 * This file was generated by Four Ways Technology
 * 
 * On Tue Aug 25 2020 13:47:39 GMT+0100 (British Summer Time)
 */
import { Module } from '@nestjs/common';
import { JobAssignment } from './job-assignment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobAssignmentService } from './job-assignment.service';
import { JobAssignmentController } from './job-assignment.controller';
import { VehicleModule } from 'src/vehicle/vehicle.module';
import { DriverModule } from 'src/driver/driver.module';
import { JobModule } from 'src/job/job.module';

@Module({
    imports: [TypeOrmModule.forFeature([JobAssignment]), VehicleModule, DriverModule, JobModule],
    providers: [JobAssignmentService],
    exports: [],
    controllers: [JobAssignmentController],
  })
  export class JobAssignmentModule {}

