import { TypeOrmModule } from '@nestjs/typeorm';
import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { QuoteLine } from './quote-line.entity';
import { QuoteLineController } from './quote-line.controller';
import { QuoteLineService } from './quote-line-service';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [TypeOrmModule.forFeature([QuoteLine]), AuthModule],
  controllers: [QuoteLineController],
  exports: [QuoteLineService],
  providers: [QuoteLineService]
})
export class QuoteLineModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes('quote-line');
  }
}