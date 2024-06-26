

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Mar 18 2021 12:02:52 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { Correspondence } from './correspondence.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorrespondenceService } from './correspondence.service';
import { CorrespondenceController } from './correspondence.controller';
import { CoreModule } from 'src/core/core.module';

@Module({
    imports: [TypeOrmModule.forFeature([Correspondence]), CoreModule],
    providers: [CorrespondenceService],
    exports: [],
    controllers: [CorrespondenceController],
  })
  export class CorrespondenceModule {}

