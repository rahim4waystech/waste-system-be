import { ConnectionOptions } from "typeorm";

// TODO: swap with env files later on patch it for better automated deployments.
let env = process.env.NODE_ENV || 'development';

let databaseName = 'black_25Mar24';
let databaseUser = 'root';
let databasePassword = '';

switch(env) {
  case 'development':
    // databaseName = 'waste'; //permissions in waste2
    databaseName = 'black_25Mar24';
    databaseUser = 'root';
    databasePassword = '';
    break;

  case 'ynd':
    databaseUser = 'root';
    databaseName = 'ynd';
    databasePassword = 'P@ssw0rd';
    break;

  case 'testing':
  case 'rwm':
  case 'murdoch':
  case 'production':
  case 'trs':
  case 'wrc':
  case 'ascot':
  default:
    databaseUser = 'fourways';
    databaseName = 'waste';
    databasePassword = 'dbfourways2020$';
    break;
}

// Check typeORM documentation for more information.
const config: any = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: databaseUser,
    password: databasePassword,
    database: databaseName,
    entities: [],
    logging: false,

    // Never enable this, it's buggy yo.
    synchronize: false,
    subscribers: [],
    autoLoadEntities: true,
    
    migrations: ["dist/src/migrations/*{.ts,.js}"],
    migrationsTableName: "migrations_typeorm",
    migrationsRun: false
  };

  export = config;
