

/**
 * This file was generated by Four Ways Technology
 * 
 * On Fri Aug 07 2020 21:32:36 GMT+0100 (British Summer Time)
 */
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { DriverType } from './driver-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverTypeService } from './driver-type.service';
import { DriverTypeController } from './driver-type.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([DriverType]), AuthModule],
    providers: [DriverTypeService],
    exports: [],
    controllers: [DriverTypeController],
  })
  export class DriverTypeModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('driver-type');
    }
  }

