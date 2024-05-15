import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, );
  app.enableCors();
  app.use(helmet(
    {
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          frameAncestors: [
            'self',"http://localhost:4200", "http://ynd.fourways-technology.co.uk" 
          ]
        }
      }
    }
  ));
  app.use(bodyParser.json({limit: '500mb'}));
  app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
  app.use(compression());

  await app.listen(3000, "0.0.0.0");
}
bootstrap();
