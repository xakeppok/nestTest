import { CarsService } from './cars.service';
import { Response } from 'express';
import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ICars } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly cars: CarsService) {}
  @Get('/')
  async findAll(@Res() res: Response): Promise<any> {
    const cars = await this.cars.getAll();
    return res.status(HttpStatus.OK).json({ data: cars });
  }
  @Post('create')
  async create(
    @Body() createCatDto: any,
    @Res() res: Response,
  ): Promise<Response> {
    const car: ICars = await this.cars.create(createCatDto);
    return res.status(HttpStatus.OK).json({ data: car });
  }
}
