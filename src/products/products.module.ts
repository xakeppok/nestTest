import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ProviderService } from './provider/provider.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schema/products.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }])],
  controllers: [ControllerController],
  providers: [ProviderService],
  exports: [ProviderService],
})
export class ProductsModule {}
