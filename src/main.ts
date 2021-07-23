import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';
import { OpenApiNestFactory } from 'nest-openapi-tools';

import * as helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.use(helmet());

  await OpenApiNestFactory.configure(
    app,
    new DocumentBuilder()
      .setTitle('Lethean VPN Api')
      .setDescription('Distributed Virtual Private Marketplace')
      .setVersion('1')
      .addServer('https://dvpm.io'),
    {
      webServerOptions: {
        enabled: true,
        path: '/',
      },
      fileGeneratorOptions: {
        enabled: true,
        outputFilePath: './openapi.yaml', // or ./openapi.json
      },
      clientGeneratorOptions: {
        enabled: false,
        type: 'typescript-axios',
        outputFolderPath: 'sdk/client/typescript/axios',
        openApiFilePath: './openapi.yaml', // or ./openapi.json
      },
    },
    {
      operationIdFactory: (c: string, method: string) => method,
    },
  );

  await app.listen(36911);
}
bootstrap();
