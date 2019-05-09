import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { Response } from 'express';
import { ProviderService } from '../provider/provider.service';
import { IProduct } from '../schema/products.schema';

@Controller('product')
export class ControllerController {

   constructor(private prov: ProviderService) {}
   @Post('/getproduct')
   async getHdata(@Body() body: any[], @Res() res: Response): Promise<any> {
      try {
         const createProduct: any[] | null = await this.prov.create(body);
         if (!Boolean(createProduct))  {
            throw new Error('error');
         }
         return res.status(HttpStatus.OK).json({data: createProduct});
      } catch (e) {
         return res.status(HttpStatus.BAD_REQUEST).json({error: e.message });
      }
   }

   @Get('/getproduct')
   async getdata( @Res() res: Response): Promise<any> {
      try {
         const createProduct: any[] | null = await this.prov.getAll();
         if (!Boolean(createProduct))  {
            throw new Error('error');
         }
         return res.status(HttpStatus.OK).json({data: createProduct});
      } catch (e) {
         return res.status(HttpStatus.BAD_REQUEST).json({error: e.message });
      }
   }
}
