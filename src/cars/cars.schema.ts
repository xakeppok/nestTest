import * as mongoose from 'mongoose';

export const CarsSchema = new mongoose.Schema({
  name: String,
  carModel: String,
  type: String,
});
