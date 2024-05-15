import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { Industry } from './industry.entity';
import { IndustryController } from './industry.controller';
import { IndustryService } from './industry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([Industry]), AuthModule],
    controllers: [IndustryController],
    exports: [],
    providers: [IndustryService]
  })
  export class IndustryModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('industry');
    }
}
