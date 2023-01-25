import { Schema, model } from 'mongoose';

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true}

});

export const ProductoModel = model('producto', ProductoSchema);