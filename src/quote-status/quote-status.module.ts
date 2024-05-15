import { TypeOrmModule } from '@nestjs/typeorm';
import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { QuoteStatus } from './quote-status.entity';
import { QuoteStatusController } from './quote-status.controller';
import { QuoteStatusService } from './quote-status.service';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [TypeOrmModule.forFeature([QuoteStatus]), AuthModule],
  controllers: [QuoteStatusController],
  exports: [],
  providers: [QuoteStatusService]
})
export class QuoteStatusModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes('quote-status');
  }
}