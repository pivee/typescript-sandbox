import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cp from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as swaggerUi from 'swagger-ui-express';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV !== 'production') {
    cp.execSync('pnpm swagger');

    const swaggerDocument = JSON.parse(
      readFileSync(join(__dirname, 'swagger.json'), 'utf8'),
    );

    app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  await app.listen(process.env.PORT ?? 4000, () => {
    Logger.log(
      `Running on port ${process.env.PORT ?? 4000}`,
      'NestApplication',
    );
  });
}
bootstrap();
