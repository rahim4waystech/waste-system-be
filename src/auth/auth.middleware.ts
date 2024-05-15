import { Injectable, NestMiddleware } from '@nestjs/common';
import { OAuthService } from './oauth.service';

const OAuth2Server = require('oauth2-server');
const OARequest = OAuth2Server.Request;
const OAResponse = OAuth2Server.Response;


@Injectable()
export class AuthMiddleware implements NestMiddleware {

  private oAuthServer = null;

  constructor(private oauthService: OAuthService) {
    this.oauthService.init();
    this.oAuthServer = new OAuth2Server({
        model: this.oauthService,

        // Lifespan of oauth token
        accessTokenLifetime: 60 * 60 * 7,
        allowBearerTokensInQueryString: true
    });
}


  use(req: any, res: any, next: () => void) {
    const oarequest = new OARequest(req);
    const oaresponse = new OAResponse(res);
  
    return this.oAuthServer.authenticate(oarequest, oaresponse)
      .then((token) => {
        next();
      }).catch((err) => {
  
        res.status(err.code || 500).json(err);
      });
  }
}
