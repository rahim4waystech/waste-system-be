

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Jan 28 2021 10:48:06 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { Incumbents } from './incumbents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncumbentsService } from './incumbents.service';
import { IncumbentsController } from './incumbents.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Incumbents])],
    providers: [IncumbentsService],
    exports: [],
    controllers: [IncumbentsController],
  })
  export class IncumbentsModule {}
