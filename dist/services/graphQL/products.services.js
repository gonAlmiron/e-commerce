"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphqlSchema = exports.graphqlRoot = void 0;
var _graphql = require("graphql");
var _products = require("../../controllers/graphQL/products.controller");
var graphqlSchema = (0, _graphql.buildSchema)("\n    type Product{\n        id: String!\n        name: String\n        description: String\n        price: Int\n}\n    type Query{\n        getProductController(id:String!):Product\n        getAllController:[Product]\n        \n}\n    input InputProduct{\n        name: String!\n        description: String!\n        price: Int!\n}\n    type Mutation{\n         saveController(data:InputProduct):Product\n}\n");
exports.graphqlSchema = graphqlSchema;
var graphqlRoot = {
  saveController: _products.saveController,
  getAllController: _products.getAllController,
  getProductController: _products.getProductController
};
exports.graphqlRoot = graphqlRoot;