import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserGroup } from './user-group.entity';
import { UserGroupController } from './user-group.controller';
import { UserGroupService } from './user-group.service';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';

@Module({
    imports: [AuthModule, CoreModule, TypeOrmModule.forFeature([UserGroup])],
    controllers: [UserGroupController],
    exports: [],
    providers: [UserGroupService]
  })
  export class UserGroupModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('user-group');
    }
}