"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientSchema = exports.ClientModel = void 0;
var _mongoose = require("mongoose");
var ClientSchema = new _mongoose.Schema({
  razonSocial: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  cuit: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
exports.ClientSchema = ClientSchema;
var ClientModel = (0, _mongoose.model)('client', ClientSchema);
exports.ClientModel = ClientModel;