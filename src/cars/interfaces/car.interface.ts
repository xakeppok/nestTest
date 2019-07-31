import { Document } from 'mongoose';

export interface ICars extends Document {
  name: string;
  carModel: string;
  type: string;
}
