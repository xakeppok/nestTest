import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/data')
  getHdata(@Res() res: Response): any {
    return res.status(HttpStatus.CREATED).json({name: 'gfdsg', lastName: 'gfdsgf'});
  }
}
