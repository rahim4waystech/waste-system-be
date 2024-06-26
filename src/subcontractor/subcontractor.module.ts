

/**
 * This file was generated by Four Ways Technology
 * 
 * On Fri Aug 14 2020 16:15:01 GMT+0100 (British Summer Time)
 */
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { Subcontractor } from './subcontractor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcontractorService } from './subcontractor.service';
import { SubcontractorController } from './subcontractor.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([Subcontractor]), AuthModule],
    providers: [SubcontractorService],
    exports: [],
    controllers: [SubcontractorController],
  })
  export class SubcontractorModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('subcontractor');
    }
  }

