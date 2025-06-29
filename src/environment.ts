import { config } from 'dotenv';
import * as env from 'env-var';

config();

export const environment = {
  database: {
    host: env.get('POSTGRES_HOST').required().asString(),
    port: env.get('POSTGRES_PORT').required().asPortNumber(),
    name: env.get('POSTGRES_DB').required().asString(),
    username: env.get('POSTGRES_USER').required().asString(),
    password: env.get('POSTGRES_PASSWORD').required().asString(),
  },
} as const;
