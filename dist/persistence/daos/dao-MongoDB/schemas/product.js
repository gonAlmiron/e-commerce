"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductSchema = exports.ProductModel = void 0;
var _mongoose = require("mongoose");
var ProductSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
exports.ProductSchema = ProductSchema;
var ProductModel = (0, _mongoose.model)('product', ProductSchema);
exports.ProductModel = ProductModel;