import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';

@Module({
    imports: [AuthModule, CoreModule, TypeOrmModule.forFeature([Contact])],
    controllers: [ContactController],
    exports: [ContactService],
    providers: [ContactService]
  })
  export class ContactModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('contact');
    }
}
