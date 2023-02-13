"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _gmail = require("../controllers/gmail");
var _whatsapp = require("../controllers/whatsapp");
var _express = require("express");
var router = (0, _express.Router)();
router.post('/gmail', _gmail.gmailController);
router.post('/whatsapp', _whatsapp.wppController);
router.post('/inbox', _whatsapp.inboxController);
var _default = router;
exports["default"] = _default;