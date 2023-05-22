import { Controller, Get } from '@nestjs/common';
import { Responses } from 'types';
import * as app from '../package.json';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  ping(): Responses.PingResponse {
    return {
      name: app.name,
      version: app.version,
      environment: process.env.NODE_ENV,
      stage: process.env.STAGE,
    };
  }

  @Get('hello')
  getHello(): string {
    return `<h1>${this.appService.getHello()}</h1>`;
  }
}
