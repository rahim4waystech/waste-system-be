import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ContactRole } from './contact-role.entity';
import { ContactRoleController } from './contact-role.controller';
import { ContactRoleService } from './contact-role.service';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';

@Module({
    imports: [AuthModule, CoreModule, TypeOrmModule.forFeature([ContactRole])],
    controllers: [ContactRoleController],
    exports: [],
    providers: [ContactRoleService]
  })
  export class ContactRoleModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('contact-role');
    }
}