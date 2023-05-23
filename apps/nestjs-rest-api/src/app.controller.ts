import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Responses } from 'types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  ping(): Responses.PingResponse {
    return {
      name: 'nestjs-rest-api',
      version: '0.0.1',
      environment: process.env.NODE_ENV,
    };
  }

  @Get()
  getHello(): Responses.DataResponse<string> {
    return { data: this.appService.getHello() };
  }
}
