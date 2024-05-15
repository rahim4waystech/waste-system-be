import { InjectRepository } from "@nestjs/typeorm";
import { OAuthToken } from './oauthtokens.entity';
import { Repository } from 'typeorm';
import { OAuthClient } from './oauthclients.entity';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { EnvironmentSettings } from "src/environment-settings/environment-settings.entity";
import { UserGroupPermission } from "src/user-group-permission/user-group-permission.entity";

const bcrypt = require('bcrypt');

@Injectable()
export class OAuthService {

    private clients: any[] = [];

    private tokens: any[] = [];

    private users: User[] = [];

    constructor(
        @InjectRepository(OAuthToken)
        private readonly oAuthTokenRepository: Repository<OAuthToken>,

        @InjectRepository(OAuthClient)
        private readonly oAuthClientRepository: Repository<OAuthClient>,

        @InjectRepository(EnvironmentSettings)
        private readonly environmentSettingsRepo: Repository<EnvironmentSettings>,

        @InjectRepository(UserGroupPermission)
        private readonly UserGroupPermissionsRepo: Repository<UserGroupPermission>,

        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
        
    ) {
        // this.init();
    }

    public async init() {
        this.clients = await this.oAuthClientRepository.find();
        this.clients.forEach((client) => {
            client.redirectUris = [];
            client.grants = client.grants.split(',');
        })
    }

    /**
 * Dump the memory storage content (for debug).
 */

public dump () {

    console.log('clients', this.clients);
   // console.log('confidentialClients', config.confidentialClients);
    console.log('tokens', this.tokens);
     console.log('users', this.users);
};

/*
 * Methods used by all grant types.
 */

public async getAccessToken (token) {


    this.tokens = await this.oAuthTokenRepository.find();


    this.users = await this.userRepo.find();

    const env = await this.environmentSettingsRepo.findOne();

    const tokens = this.tokens.filter(function (savedToken) {

        return savedToken.accessToken === token;
    });





    tokens[0].user = this.users.filter(u => u.id === tokens[0].userId);

    const userGroupPermissions = await this.UserGroupPermissionsRepo.find({
        where: {
            userGroupId:tokens[0].user.userGroupId,
        },
        relations: ['permission'],
    });

    tokens[0].user.userGroupPermissions = userGroupPermissions;
    tokens[0].env = env;

    return tokens[0];
};

getClient(clientId, clientSecret) {

    const clients = this.clients.filter(function (client) {

        return client.clientId === clientId && client.clientSecret === clientSecret;
    });

   /* var confidentialClients = config.confidentialClients.filter(function (client) {

        return client.clientId === clientId && client.clientSecret === clientSecret;
    });*/

    return clients[0]; // || confidentialClients[0];
};

public async saveToken (token, client, user) {

    token.oAuthClientId = client.id

    token.userId = user.id;

    const env = await this.environmentSettingsRepo.findOne();

    const userGroupPermissions = await this.UserGroupPermissionsRepo.find({
        where: {
            userGroupId: user.userGroupId,
        },
        relations: ['permission'],
    });

    // TODO: db call to save using repo
    this.tokens.push(token);

    await this.oAuthTokenRepository.save(token);

    token.client = client;
    token.user = user;
    token.user.userGroupPermissions = userGroupPermissions;
    token.env = env;

    return token;
};

/*
 * Method used only by password grant type.
 */

public async getUser(username, password) {

    this.users = await this.userRepo.find();

    let foundUser = null;

    for(let i = 0; i < this.users.length; i++) {
        const user = this.users[i];

        const validPasswordHash = bcrypt.compareSync(password, user.password);

         if(user.email === username && validPasswordHash) {
             foundUser = user;
         }
    }

    // Never return password
    delete foundUser['password'];

    return foundUser;
}

/*
 * Method used only by client_credentials grant type.
 */

public getUserFromClient = function (client) {

/*    var clients = config.confidentialClients.filter(function (savedClient) {

        return savedClient.clientId === client.clientId && savedClient.clientSecret === client.clientSecret;
    });*/ 

    // Implement later on

    return 0;
};

/*
 * Methods used only by refresh_token grant type.
 */

public async getRefreshToken (refreshToken) {

    
    this.tokens = await this.oAuthTokenRepository.find();

    const tokens = this.tokens.filter(function (savedToken) {

        return savedToken.refreshToken === refreshToken;
    });
    
    if (!tokens.length) {
        return;
    }


    const token = tokens[0];
    token.client = this.clients.filter(c => c.id === token.oAuthClientId)[0];
    token.user = this.users.filter(u => u.id === token.userId)[0];

    return {
        id: token.id,
        client: token.client,
        user: token.user,
        refreshToken: refreshToken,
        refreshTokenExpiresAt: token.refreshTokenExpiresAt,
    };
};

public async revokeToken (token) {


    this.tokens = await this.oAuthTokenRepository.find();

    this.tokens = this.tokens.filter(function (savedToken) {

        return savedToken.refreshToken !== token.refreshToken;
    });

    const revokedTokensFound = this.tokens.filter(function (savedToken) {

        return savedToken.refreshToken === token.refreshToken;
    });

    //TODO: delete tokens from db after revoke

    return !revokedTokensFound.length;
};
}