import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPermission } from './user-permission.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserPermission])],
})
export class UserPermissionModule {}
