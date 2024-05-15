import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { getFeature, getAction } from "@nestjsx/crud";
import { UserService } from "./user.service";
import { InjectRepository } from "@nestjs/typeorm";
import { OAuthClient } from "./oauthclients.entity";
import { Repository } from "typeorm";
import { OAuthToken } from './oauthtokens.entity';
import { OAuthService } from './oauth.service';
import { User } from './user.entity';
import { UserGroupPermission } from '../user-group-permission/user-group-permission.entity';
import { WSCache } from "src/core/cache.service";
import { UserGroupPermissionService } from "src/user-group-permission/user-group-permission.service";

const moment = require('moment');

@Injectable()
export class ACLGuard implements CanActivate {

  constructor(private userService: UserService,
    private userGroupPermissionService: UserGroupPermissionService,
    private oAuthService: OAuthService) {

  }

  async canActivate(ctx: ExecutionContext) {

    const request = ctx.switchToHttp().getRequest();

    const token: string = request.get('authorization');



    // not logged in
    if (token === null || token === '' || token === undefined) {
      return true;
    }

    const accessToken: string = token.replace('Bearer ', '');

    const accessTokenObject: any = await this.oAuthService.getAccessToken(accessToken);

    if(accessTokenObject === null || accessTokenObject === undefined) {
      return true;
    }

    const user: any = await this.userService.getById(accessTokenObject.userId);
    user.userGroupPermissions = await this.userGroupPermissionService.getAllPermissionsByUserGroup(user.userGroupId);

    delete user['password'];

    const handler = ctx.getHandler();
    const controller = ctx.getClass();

    const feature = getFeature(controller);
    const action = getAction(handler);

    // don't apply to auth routes
    if (feature === 'auth') {
      return true;
    }

    const backendPermission: string = `${feature}-${action}`;

    // add both org id and createdBy to the object so they automatically linked and not changed on frontend :)
    const body = ctx.switchToHttp().getRequest().body;

    try {
      const data = body;

      if (data !== null && data !== undefined) {

        this.setCreatedBy(user, data);
        this.setUpdatedBy(user,data);

        if(data.bulk !== undefined && data.bulk !== null) {
          data.bulk.forEach(item => {
            this.setCreatedBy(user, item);
            this.setUpdatedBy(user,item);
          });
        }

        data.organisationId = user.organisationId;

        if(data.updatedAt === -1 || data.updatedAt === undefined || data.updatedAt === null || data.updatedAt === "-1") {
          data.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')
        }

        if(data.createdAt === -1 || data.createdAt === undefined || data.createdAt === null || data.createdAt === "-1") {
          data.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')
        }
            
        WSCache.default.set('currentUserId',user.id );
        WSCache.default.set('currentUser',JSON.stringify(user));

        // Note: you can any another information here too
       // ctx.switchToHttp().getRequest().body = data;

      }

    }

    catch(e) {
    }

    

    // This is used for security and audit logging.
    ctx.switchToHttp().getRequest().user = user;

   // return true;
    return this.checkForPermission(user, backendPermission);
  }

  setCreatedBy(user: User, data: any) {
    if(data.createdBy === -1 || data.createdBy === undefined || data.createdBy === null || data.createdBy === "-1" || data.createdBy === 0) {
      data.createdBy = user.id;
   }
  }

  setUpdatedBy(user: User, data: any) {
      data.updatedBy = user.id;
  }

  checkForPermission(user: any, backendPermission: string): boolean {

    let hasPermission = true;
    //  user.userGroupPermissions.forEach((userGroupPermission: UserGroupPermission) => {
    //    const apiS = userGroupPermission.permission.apis.split(',');

    //    if ((apiS.indexOf(backendPermission) !== -1 || apiS.indexOf('god-mode') !== -1)) {
    //      hasPermission = true;
    //    }
    //  });

    return hasPermission;
  }
}
