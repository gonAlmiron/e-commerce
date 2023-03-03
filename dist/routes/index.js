"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = _interopRequireDefault(require("./users.router"));
var _notifications = _interopRequireDefault(require("./notifications.router"));
var _products = require("../controllers/products.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.json({
    message: "Petición desde el SERVIDOR -> ROUTER"
  });
});

// router.use('/products', ProductsRouter)

router.use('/auth', _users["default"]);
router.use('/notifications', _notifications["default"]);
router.post('/products', _products.saveController);
router.get('/products', _products.getAllController);
router.get('/products/:id', _products.getByIdController);
var _default = router;
exports["default"] = _default;