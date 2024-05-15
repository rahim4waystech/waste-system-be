import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { Opportunity } from './opportunity.entity';
import { OpportunityService } from './opportunity.service';
import { OpportunityController } from './opportunity.controller';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';


@Module({
    imports: [AuthModule, CoreModule, TypeOrmModule.forFeature([Opportunity])],
    controllers: [OpportunityController],
    exports: [],
    providers: [OpportunityService]
  })
  export class OpportunityModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('opportunity');
    }
}