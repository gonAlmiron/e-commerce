"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _gmail = require("../controllers/gmail.js");
var _whatsapp = require("../controllers/whatsapp.js");
var _passport = _interopRequireDefault(require("passport"));
var _logger = _interopRequireDefault(require("../services/logger.js"));
var _auth = require("../services/auth.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.json({
    message: "Fetch desde el SERVIDOR / ROUTER"
  });
});
router.post('/signup', function (req, res, next) {
  _passport["default"].authenticate('signup', _auth.passportOptions, function (err, user, info) {
    console.log('Info SIGNUP');
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);
    _logger["default"].info("Se registr\xF3 un usuario: ".concat(user.username, " \n\n. Ruta /SIGNUP. Metogo POST"));
    res.json({
      msg: 'signup OK'
    });
  })(req, res, next);
});
router.post('/login', _passport["default"].authenticate('login', _auth.passportOptions), function (req, res, user) {
  _logger["default"].info("Se loge{o} un usuario. Ruta /LOGIN. Metogo POST");
  res.json({
    msg: "Login OK!!"
  });
});
router.post('/gmail', _gmail.gmailController);
router.post('/whatsapp', _whatsapp.wppController);
router.post('/inbox', _whatsapp.inboxController);
var _default = router;
exports["default"] = _default;