"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twilioClient = exports.transporter = void 0;
var _twilio = _interopRequireDefault(require("twilio"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _nodemailer = require("nodemailer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();

// WHATSAPP

var twilioClient = (0, _twilio["default"])(process.env.SID, process.env.TOKEN);

// EMAIL 
exports.twilioClient = twilioClient;
var transporter = (0, _nodemailer.createTransport)({
  // host:'smtp.gmail.com',
  service: 'gmail',
  port: process.env.PORT_GMAIL,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
exports.transporter = transporter;