import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { environment } from 'src/environment';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

type TypeORMModulePostgresConnectionsOptions = TypeOrmModuleOptions &
  PostgresConnectionOptions;

export class TypeORMConfig implements TypeOrmOptionsFactory {
  createTypeORMOptions(): TypeORMModulePostgresConnectionsOptions {
    const { name, host, port, username, password } = environment.database;

    return {
      type: 'postgres',
      database: name,
      host: host,
      port: port,
      username: username,
      password: password,
      migrationsRun: false,
      retryAttempts: 10,
      retryDelay: 3000,
      synchronize: false,
      logging: false,
      entities: [`${__dirname}/../../src/**/entities/*.entity.{js,ts}`],
      migrationsTableName: '_migrations',
      migrations: [`${__dirname}/../../src/database/migrations/**/*{.ts,.js}`],
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
