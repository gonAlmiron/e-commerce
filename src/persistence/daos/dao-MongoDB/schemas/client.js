import { Schema, model } from 'mongoose';

export const ClientSchema = new Schema({
  razonSocial: { type: String, required: true },
  direccion: { type: String, required: true },
  cuit: { type: Number, required: true },
},
{timestamps: true}
)

export const ClientModel = model('client', ClientSchema);