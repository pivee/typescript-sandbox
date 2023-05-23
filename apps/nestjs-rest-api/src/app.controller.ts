import { TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { Responses } from 'types';
import * as app from '../package.json';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get()
  ping(): Responses.PingResponse {
    return {
      name: app.name,
      version: app.version,
      environment: process.env.NODE_ENV,
    };
  }

  @TypedRoute.Get('hello')
  getHello(): Responses.DataResponse<string> {
    return { data: this.appService.getHello() };
  }
}
