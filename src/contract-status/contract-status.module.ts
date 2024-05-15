import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ContractStatus } from './contract-status.entity';
import { ContractStatusController } from './contract-status.controller';
import { ContractStatusService } from './contract-status.service';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([ContractStatus])],
    controllers: [ContractStatusController],
    exports: [],
    providers: [ContractStatusService]
  })
  export class ContractStatusModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('contract-status');
    }
}