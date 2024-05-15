import { Module } from '@nestjs/common';
import { UserGroupPermission } from './user-group-permission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroupPermissionController } from './user-group-permission.controller';
import { UserGroupPermissionService } from './user-group-permission.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserGroupPermission])],
    exports: [UserGroupPermissionService],
    controllers: [UserGroupPermissionController],
    providers: [UserGroupPermissionService],
})
export class UserGroupPermissionModule {}
