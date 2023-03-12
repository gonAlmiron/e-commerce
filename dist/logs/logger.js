"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _winston = _interopRequireDefault(require("winston"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var createLogger = _winston["default"].createLogger,
  format = _winston["default"].format,
  transports = _winston["default"].transports;
var combine = format.combine,
  timestamp = format.timestamp,
  prettyPrint = format.prettyPrint;
var Console = transports.Console;
var logConfiguration = {
  level: 'info',
  format: combine(timestamp(), prettyPrint()),
  transports: [new Console({
    level: 'info'
  })]
};
var logger = createLogger(logConfiguration);
var _default = logger;
exports["default"] = _default;