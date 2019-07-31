import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICars } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  constructor(@InjectModel('CARS_MODEL') private readonly CarsSchema: Model<ICars>) {}
  public async getAll(): Promise<ICars[]> {
    return await this.CarsSchema.find()
      .lean()
      .exec();
  }
  public async create(data: ICars): Promise<ICars> {
    return await this.CarsSchema.create(data);
  }
  
}
