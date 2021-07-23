import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';
import * as helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.use(helmet());

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Lethean VPN Api',
  };
  const config = new DocumentBuilder()
    .setTitle('Lethean D-VPM')
    .setDescription('Distributed Virtual Private Marketplace')
    .setVersion('1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document, customOptions);

  await app.listen(36911);
}
bootstrap();
