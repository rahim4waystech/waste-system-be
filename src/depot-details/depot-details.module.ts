

/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Oct 05 2020 14:08:29 GMT+0100 (British Summer Time)
 */
import { Module } from '@nestjs/common';
import { DepotDetails } from './depot-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepotDetailsService } from './depot-details.service';
import { DepotDetailsController } from './depot-details.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DepotDetails])],
    providers: [DepotDetailsService],
    exports: [],
    controllers: [DepotDetailsController],
  })
  export class DepotDetailsModule {}

