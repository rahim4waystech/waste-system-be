import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ContractProductService } from './contract-product.service';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';
import { ContractProductController } from './contract-product.controller';
import { ContractProduct } from './contract-product.entity';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([ContractProduct])],
    controllers: [ContractProductController],
    exports: [],
    providers: [ContractProductService]
  })
  export class ContractProductModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('contract-product');
    }
} 