import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AccountTypeController } from './account-type.controller';
import { AccountTypeService } from './account-type.service';
import { AccountType } from './account-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([AccountType]), AuthModule],
    controllers: [AccountTypeController],
    exports: [],
    providers: [AccountTypeService]
  })
  export class AccountTypeModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('account-type');
    }
}
