"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _logger = _interopRequireDefault(require("../logs/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var mongoDBSRV = process.env.MONGO_ATLAS_URL || 'mongodb+srv://gonDev:1234@planeta-it.o7o4bsp.mongodb.net/PlanetaITGestion?retryWrites=true&w=majority';
if (process.env.NODE_ENV == 'TEST=INT' || process.env.NODE_ENV == 'TEST=E2E') {
  _logger["default"].info('Estamos en un test. usando SRV MONGO TEST');
  mongoDBSRV = process.env.MONGO_ATLAS_URL_TEST || 'mongodb+srv://gonDev:1234@planeta-it.o7o4bsp.mongodb.net/TEST-planetaIT?retryWrites=true&w=majority';
}
var _default = {
  MONGO_ATLAS_URL: mongoDBSRV,
  PUERTO: process.env.PUERTO || 3002
};
exports["default"] = _default;