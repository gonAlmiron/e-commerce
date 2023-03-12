"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _clients = require("../controllers/clients.controller");
var router = (0, _express.Router)();
router.get('/', _clients.getAllController);
router.post('/', _clients.saveController);
router.get('/:id', _clients.getByIdController);
router["delete"]('/:id', _clients.deleteController);
router.put('/:id', _clients.updateController);
var _default = router;
exports["default"] = _default;