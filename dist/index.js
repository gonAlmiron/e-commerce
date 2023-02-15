"use strict";

var _server = _interopRequireDefault(require("./services/server"));
var _config = _interopRequireDefault(require("./config"));
var _logger = _interopRequireDefault(require("./logs/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.PORT || _config["default"].PUERTO;
_server["default"].listen(PORT, function () {
  return _logger["default"].info("Escuchando en el puerto ".concat(PORT, " - PID WORKER ").concat(process.pid, " "));
});