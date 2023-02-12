"use strict";

var _logger = _interopRequireDefault(require("../services/logger.js"));
var _mongodb = _interopRequireDefault(require("./dao-mongodb/mongodb.js"));
var _user = require("./dao-MongoDB/schemas/user.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var dao;
var argv = process.argv(2);
switch (argv) {
  case 'mongo':
    dao = new _mongodb["default"]('user-ecommerce', _user.UserModel);
    dao.initMongoDB();
    _logger["default"].info(argv);
    break;
  default:
    dao = new _mongodb["default"]('user-ecommerce', _user.UserModel);
    break;
}