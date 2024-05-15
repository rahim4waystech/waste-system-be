import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { Discussion } from './discussion.entity';
import { DiscussionController } from './discussion.controller';
import { DiscussionService } from './discussion.service';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';


@Module({
    imports: [AuthModule, CoreModule, TypeOrmModule.forFeature([Discussion])],
    controllers: [DiscussionController],
    exports: [],
    providers: [DiscussionService]
  })
  export class DiscussionModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
       consumer
         .apply(AuthMiddleware)
         .forRoutes('discussion');
    }
}
