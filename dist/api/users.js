"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _user = require("../persistence/daos/dao-MongoDB/schemas/user");
var findByID = function findByID(id) {
  if (id) return _user.UserModel.findById(id);
  return _user.UserModel.find();
};
var find = function find(username, password) {
  return _user.UserModel.findOne({
    username: username,
    password: password
  });
};
var create = function create(username, password) {
  return _user.UserModel.create(username, password);
};
var update = function update(id, data) {
  return _user.UserModel.findByIdAndUpdate(id, data, {
    "new": true
  });
};
var remove = function remove(id) {
  return _user.UserModel.findByIdAndDelete(id);
};
var _default = {
  find: find,
  findByID: findByID,
  create: create,
  update: update,
  remove: remove
};
exports["default"] = _default;