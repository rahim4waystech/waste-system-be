import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LeadStatusService } from './lead-status.service';
import { LeadStatusController } from './lead-status.controller';
import { LeadStatus } from './lead-status.entity';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';

@Module({
    imports: [AuthModule, CoreModule, TypeOrmModule.forFeature([LeadStatus])],
    controllers: [LeadStatusController],
    exports: [],
    providers: [LeadStatusService]
  })
  export class LeadStatusModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('lead-status');
    }
}