import { Quote } from './quote.entity';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';
import { QuoteLineModule } from 'src/quote-line/quote-line.module';
import { CoreModule } from 'src/core/core.module';


@Module({
  imports: [TypeOrmModule.forFeature([Quote]), AuthModule, CoreModule, QuoteLineModule],
  controllers: [QuoteController],
  exports: [],
  providers: [QuoteService]
})
export class QuoteModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('quote');
    }
  }