"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _gmail = require("../controllers/gmail.js");
var _whatsapp = require("../controllers/whatsapp.js");
var _passport = _interopRequireDefault(require("passport"));
var _auth = require("../services/auth.js");
var _users = require("../controllers/users.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.json({
    message: "Petición desde el SERVIDOR -> ROUTER"
  });
});
router.post('/signup', _users.signUpController);
router.post('/login', _passport["default"].authenticate('login', _auth.passportOptions), _users.loginController);
router.post('/gmail', _gmail.gmailController);
router.post('/whatsapp', _whatsapp.wppController);
router.post('/inbox', _whatsapp.inboxController);
var _default = router;
exports["default"] = _default;