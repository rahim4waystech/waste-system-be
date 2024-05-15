

/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Aug 10 2020 15:39:35 GMT+0100 (British Summer Time)
 */
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { OrderStatus } from './order-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStatusService } from './order-status.service';
import { OrderStatusController } from './order-status.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([OrderStatus]), AuthModule],
    providers: [OrderStatusService],
    exports: [],
    controllers: [OrderStatusController],
  })
  export class OrderStatusModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('order-status');
    }
  }
