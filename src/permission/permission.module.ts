

/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Feb 08 2021 14:33:51 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { Permission } from './permission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Permission])],
    providers: [PermissionService],
    exports: [],
    controllers: [PermissionController],
  })
  export class PermissionModule {}

