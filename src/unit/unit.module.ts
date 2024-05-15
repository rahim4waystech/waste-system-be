
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { Unit } from './unit.entity';
import { UnitService } from './unit.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';


@Module({
  imports: [TypeOrmModule.forFeature([Unit]),AuthModule],
  controllers: [UnitController],
  exports: [UnitService],
  providers: [UnitService]
})
export class UnitModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes('unit');
  }
}