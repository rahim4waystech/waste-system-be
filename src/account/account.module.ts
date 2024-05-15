import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AccountController } from './account.controller';
import { Account } from './account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from './account.service';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';
import { ContactModule } from 'src/contact/contact.module';

@Module({
  imports: [TypeOrmModule.forFeature([Account]), AuthModule, ContactModule],
  controllers: [AccountController],
  exports: [AccountService],
  providers: [AccountService]
})
export class AccountModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware)
        .forRoutes('account');
   }

  }
