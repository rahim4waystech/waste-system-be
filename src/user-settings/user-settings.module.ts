

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 29 2021 09:37:41 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { UserSettings } from './user-settings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSettingsService } from './user-settings.service';
import { UserSettingsController } from './user-settings.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UserSettings])],
    providers: [UserSettingsService],
    exports: [],
    controllers: [UserSettingsController],
  })
  export class UserSettingsModule {}

