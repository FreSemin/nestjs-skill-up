import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from 'src/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(environment.app.port);
}
bootstrap().then(() => {
  console.log(`App started ${environment.app.host}:${environment.app.port}`);
});
