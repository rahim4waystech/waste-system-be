import { Controller, Get, Req, Res, Post } from '@nestjs/common';
import { OAuthService } from './oauth.service';
import { Request, Response } from 'express';
import { Feature } from '@nestjsx/crud';

const OAuth2Server = require('oauth2-server');
const OARequest = OAuth2Server.Request;
const OAResponse = OAuth2Server.Response;


@Feature('auth')
@Controller('auth')
export class AuthController {

    private oAuthServer: any = null;

    constructor(private oauthService: OAuthService) {

        this.oauthService.init();
        this.oAuthServer = new OAuth2Server({
            model: this.oauthService,

            // Lifespan of oauth token - 7 hours for now
            accessTokenLifetime: 60 * 60 * 7,
            allowBearerTokensInQueryString: true
        });
    }

    @Post('token')
    public token(@Req() request: Request, @Res() response: Response): Promise<string> {
        const oarequest = new OARequest(request);
        const oaresponse = new OAResponse(response);
   
        return this.oAuthServer.token(oarequest, oaresponse)
		.then((token) => {

			response.json(token);
		}).catch((err) => {


			response.status(err.code || 500).json(err);
		});
}
}
