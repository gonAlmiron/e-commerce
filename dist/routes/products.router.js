"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _products = require("../controllers/products.controller");
var router = (0, _express.Router)();
router.get('/', _products.getAllController);
router.post('/', _products.saveController);
router.get('/:id', _products.getByIdController);
router["delete"]('/:id', _products.deleteController);
router.put('/:id', _products.updateController);
var _default = router;
exports["default"] = _default;