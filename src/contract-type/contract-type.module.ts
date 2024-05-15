import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ContractType } from './contract-type.entity';
import { ContractTypeController } from './contract-type.controller';
import { ContractTypeService } from './contract-type.service';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';

@Module({
    imports: [AuthModule, CoreModule, TypeOrmModule.forFeature([ContractType])],
    controllers: [ContractTypeController],
    exports: [],
    providers: [ContractTypeService]
  })
  export class ContractTypeModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('contract-type');
    }
}