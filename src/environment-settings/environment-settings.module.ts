

/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 29 2021 09:38:25 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { EnvironmentSettings } from './environment-settings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentSettingsService } from './environment-settings.service';
import { EnvironmentSettingsController } from './environment-settings.controller';

@Module({
    imports: [TypeOrmModule.forFeature([EnvironmentSettings])],
    providers: [EnvironmentSettingsService],
    exports: [],
    controllers: [EnvironmentSettingsController],
  })
  export class EnvironmentSettingsModule {}
