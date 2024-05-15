import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuthClient } from './oauthclients.entity';
import { OAuthToken } from './oauthtokens.entity';
import { AuthController } from './auth.controller';
import { OAuthService } from './oauth.service';
import { UserService } from './user.service';
import { User } from './user.entity';
import { APP_GUARD } from '@nestjs/core';
import { ACLGuard } from './auth.guard';
import { UserController } from './user.controller';
import { EnvironmentSettingsModule } from 'src/environment-settings/environment-settings.module';
import { EnvironmentSettings } from 'src/environment-settings/environment-settings.entity';
import { UserGroupPermission } from 'src/user-group-permission/user-group-permission.entity';
import { UserGroupPermissionModule } from 'src/user-group-permission/user-group-permission.module';

@Module({
    imports: [TypeOrmModule.forFeature([OAuthClient, OAuthToken, User, EnvironmentSettings, UserGroupPermission]), UserGroupPermissionModule],
    controllers: [AuthController, UserController],
    providers: [
    OAuthService,
    UserService, 

    {
        provide: APP_GUARD,
        useClass: ACLGuard,
      },
    ],
    exports: [OAuthService]
})
export class AuthModule {}
