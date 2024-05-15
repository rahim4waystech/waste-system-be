

/**
 * This file was generated by Four Ways Technology
 * 
 * On Fri Aug 07 2020 15:04:56 GMT+0100 (British Summer Time)
 */
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { VehicleType } from './vehicle-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleTypeService } from './vehicle-type.service';
import { VehicleTypeController } from './vehicle-type.controller';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([VehicleType]), AuthModule],
    providers: [VehicleTypeService],
    exports: [],
    controllers: [VehicleTypeController],
  })
  export class VehicleTypeModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('vehicle-type');
    }
  }
