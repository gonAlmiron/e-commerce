"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUpController = exports.loginController = void 0;
var _passport = _interopRequireDefault(require("passport"));
var _logger = _interopRequireDefault(require("../logs/logger.js"));
var _auth = require("../services/auth.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var signUpController = function signUpController(req, res, next) {
  _passport["default"].authenticate('signup', _auth.passportOptions, function (err, user, info) {
    console.log('Info SIGNUP');
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);
    _logger["default"].info("Se registr\xF3 un usuario: ".concat(user.username, " \n\n. Ruta /SIGNUP. Metogo POST"));
    res.json({
      msg: 'signup OK',
      user: user
    });
  })(req, res, next);
};
exports.signUpController = signUpController;
var loginController = function loginController(req, res, user) {
  _logger["default"].info("Se loge\xF3 un usuario. Ruta /LOGIN. Metogo POST");
  res.json({
    msg: "Login OK!!"
  });
};
exports.loginController = loginController;