import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from '../schema/products.schema';


@Injectable()
export class ProviderService {
   constructor(@InjectModel('Products') private readonly catModel: Model<IProduct>) {}

   public async create(createCatDto: any[]): Promise<IProduct[]> {
      const products: IProduct[] = [];
      for (const product of createCatDto) {
         const createdCat: IProduct | null = await this.catModel.create(product);
         products.push(createdCat);
      }
      return products;
   }

   public async getAll(): Promise<IProduct[]> {
      return await this.catModel.find().lean().exec();
   }
}
