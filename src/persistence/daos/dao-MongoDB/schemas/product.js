import { Schema, model } from 'mongoose';

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
},
{timestamps: true}
)

export const ProductModel = model('product', ProductSchema);