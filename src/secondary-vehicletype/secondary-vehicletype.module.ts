

/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Feb 08 2021 10:22:41 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { SecondaryVehicleType } from './secondary-vehicletype.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecondaryVehicleTypeService } from './secondary-vehicletype.service';
import { SecondaryVehicleTypeController } from './secondary-vehicletype.controller';

@Module({
    imports: [TypeOrmModule.forFeature([SecondaryVehicleType])],
    providers: [SecondaryVehicleTypeService],
    exports: [],
    controllers: [SecondaryVehicleTypeController],
  })
  export class SecondaryVehicleTypeModule {}
