"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = require("../controllers/users.controller");
var _passport = _interopRequireDefault(require("passport"));
var _users2 = require("../services/users.services");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.post('/login', _passport["default"].authenticate('login', _users2.passportOptions), _users.loginController);
router.post('/signup', _users.signUpController);
router.get('/users', _users.getAllController);
router.post('/logout', function (req, res) {
  req.logout();
  res.json({
    message: 'GoodBye!'
  });
});
var _default = router;
exports["default"] = _default;