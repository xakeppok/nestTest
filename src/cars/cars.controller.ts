import { CarsService } from './cars.service';
import { Response } from 'express';
import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor(private readonly cars: CarsService) {}
  @Get('/')
  async findAll(): Promise<any> {

    console.log("xuy")
    return this.cars.getAll();
  }
  @Post('create')
  async create(@Body() createCatDto: any,  @Res() res: Response): Promise<Response> {
    const car = await this.cars.create(createCatDto);
    return res.status(HttpStatus.OK).json({data: car});
  }
}
