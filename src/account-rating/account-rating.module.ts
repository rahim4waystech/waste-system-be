import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRating } from './account-rating.entity';
import { AccountRatingController } from './account-rating.controller';
import { AccountRatingService } from './account-rating.service';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([AccountRating]), AuthModule],
    controllers: [AccountRatingController],
    exports: [],
    providers: [AccountRatingService]
  })
  export class AccountRatingModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('account-rating');
    }
}
