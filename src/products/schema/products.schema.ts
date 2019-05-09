import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const ProductSchema = new mongoose.Schema({
   img: String,
   name: String,
   article: String,
   brand: String,
   price: Number,
   img_short: String,
   amount: Number,
});

export interface IProduct extends Document {
   img: string;
   name: string;
   article: string;
   brand: string;
   price: number;
   img_short: string;
   amount: number;
}

export const OrderSchema = new mongoose.Schema({
   orders: [{
      idProduct: mongoose.Schema.Types.ObjectId,
   }],
   deliveryDate: Date,
   createdAt: Date,
 });
