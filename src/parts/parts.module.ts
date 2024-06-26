

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Mar 18 2021 15:41:11 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { Parts } from './parts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartsService } from './parts.service';
import { PartsController } from './parts.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Parts])],
    providers: [PartsService],
    exports: [],
    controllers: [PartsController],
  })
  export class PartsModule {}

