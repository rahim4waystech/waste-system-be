

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Aug 07 2020 21:32:36 GMT+0100 (British Summer Time)
 */
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleCheckAreaService } from './vehicle-check-area.service';
import { VehicleCheckAreaController } from './vehicle-check-area.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { VehicleCheckArea } from './vehicle-check-area.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VehicleCheckArea]), AuthModule],
    providers: [VehicleCheckAreaService],
    exports: [],
    controllers: [VehicleCheckAreaController],
  })
  export class VehicleCheckAreaModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('vehicle-check-area');
    }
  }
