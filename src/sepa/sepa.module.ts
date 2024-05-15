import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';
import { SepaController } from './sepa.controller';
import { Sepa } from './sepa.entity';
import { SepaService } from './sepa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sepa]), AuthModule],
  controllers: [SepaController],
  exports: [],
  providers: [SepaService]
})
export class SepaModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware)
        .forRoutes('sepa');
   }

  }
