import { config } from 'dotenv';
import * as env from 'env-var';

config();

export const environment = {
  app: {
    host: env.get('APP_HOST').default('http://127.0.0.1').asString(),
    port: env.get('APP_PORT').default(3000).asPortNumber(),
  },
  database: {
    host: env.get('POSTGRES_HOST').required().asString(),
    port: env.get('POSTGRES_PORT').required().asPortNumber(),
    name: env.get('POSTGRES_DB').required().asString(),
    username: env.get('POSTGRES_USER').required().asString(),
    password: env.get('POSTGRES_PASSWORD').required().asString(),
  },
} as const;
