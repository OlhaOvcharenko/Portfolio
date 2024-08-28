import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

 
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use('/public', express.static('public'));

  await app.enableShutdownHooks();

  await app.listen(8000);
}

bootstrap();