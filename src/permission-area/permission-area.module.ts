import { Module } from '@nestjs/common';
import { PermissionArea } from './permission-area.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([PermissionArea])],
})
export class PermissionAreaModule {}
