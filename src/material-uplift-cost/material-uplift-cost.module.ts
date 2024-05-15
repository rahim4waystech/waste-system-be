

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jul 09 2021 15:57:45 GMT+0100 (British Summer Time)
 */
import { Module } from '@nestjs/common';
import { MaterialUpliftCost } from './material-uplift-cost.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialUpliftCostService } from './material-uplift-cost.service';
import { MaterialUpliftCostController } from './material-uplift-cost.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MaterialUpliftCost])],
    providers: [MaterialUpliftCostService],
    exports: [],
    controllers: [MaterialUpliftCostController],
  })
  export class MaterialUpliftCostModule {}
