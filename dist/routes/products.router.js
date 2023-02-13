"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _products = require("../controllers/products.controller");
var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = new _express.Router();
router.get('/', (0, _expressAsyncHandler["default"])(_products.getAllController));
// router.get('/:id', Handler(ProductController.getProductById));
router.post('/', (0, _expressAsyncHandler["default"])(_products.saveController));
// router.put('/:id', Handler(ProductController.updateProduct));
// router.delete('/:id', Handler(ProductController.deleteProduct));
var _default = router;
exports["default"] = _default;