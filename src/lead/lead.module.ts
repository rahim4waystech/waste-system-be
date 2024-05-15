import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { Lead } from './lead.entity';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';
import { AuthMiddleware } from '../auth/auth.middleware';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [AuthModule, CoreModule, TypeOrmModule.forFeature([Lead])],
    controllers: [LeadController],
    exports: [],
    providers: [LeadService]
  })
  export class LeadModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
    //   consumer
      //   .apply(AuthMiddleware)
        // .forRoutes('lead');
    }
}
