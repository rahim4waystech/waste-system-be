

/**
 * This file was generated by Four Ways Technology
 * 
 * On Tue Aug 25 2020 14:01:30 GMT+0100 (British Summer Time)
 */
import { Module } from '@nestjs/common';
import { SkipRound } from './skip-round.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkipRoundService } from './skip-round.service';
import { SkipRoundController } from './skip-round.controller';

@Module({
    imports: [TypeOrmModule.forFeature([SkipRound])],
    providers: [SkipRoundService],
    exports: [],
    controllers: [SkipRoundController],
  })
  export class SkipRoundModule {}
