import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDocument = JSON.parse(
    readFileSync(join(__dirname, 'swagger.json'), 'utf8'),
  );

  app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  await app.listen(process.env.PORT ?? 4000, () => {
    Logger.log(
      `Running on port ${process.env.PORT ?? 4000}`,
      'NestApplication',
    );
  });
}
bootstrap();
