import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from 'src/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(environment.app.port);
}

void bootstrap().then(() => {
  console.log(`App started on ${environment.app.host}:${environment.app.port}`);
});
