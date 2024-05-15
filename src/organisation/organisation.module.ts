import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { OrganisationController } from './organisation.controller';
import { OrganisationService } from './organisation.service';
import { Organisation } from './organisation.entity';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';
@Module({
    imports: [AuthModule, CoreModule, TypeOrmModule.forFeature([Organisation])],
    controllers: [OrganisationController],
    exports: [],
    providers: [OrganisationService]
  })
  export class OrganisationModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('organisation');
    }
}