import { TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { Responses } from 'types';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get()
  ping(): Responses.PingResponse {
    return {
      name: 'nestjs-rest-api',
      version: '0.0.1',
      environment: process.env.NODE_ENV,
    };
  }

  @TypedRoute.Get('hello')
  getHello(): Responses.TextResponse {
    return { data: this.appService.getHello() };
  }
}
