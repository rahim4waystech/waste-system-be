

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Sep 07 2023 10:10:45 GMT+0100 (British Summer Time)
 */
import { Module } from '@nestjs/common';
import { OrderProvision } from './order-provision.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProvisionService } from './order-provision.service';
import { OrderProvisionController } from './order-provision.controller';

@Module({
    imports: [TypeOrmModule.forFeature([OrderProvision])],
    providers: [OrderProvisionService],
    exports: [],
    controllers: [OrderProvisionController],
  })
  export class OrderProvisionModule {}

