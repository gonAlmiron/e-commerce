"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
var _config = _interopRequireDefault(require("../config"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _routes = _interopRequireDefault(require("../routes"));
var _users = require("./users.services");
var _passport = _interopRequireDefault(require("passport"));
var _logger = _interopRequireDefault(require("../logs/logger"));
var _morgan = _interopRequireDefault(require("morgan"));
var _expressGraphql = require("express-graphql");
var _productsServices = require("./graphQL/products.services.js");
var _info = require("../docs/info");
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use(_express["default"].json());

// CONFIGURACION DE GRAPHQL
app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  schema: _productsServices.graphqlSchema,
  rootValue: _productsServices.graphqlRoot,
  graphiql: true
}));

// DOCUMENTACION
var specs = (0, _swaggerJsdoc["default"])(_info.info);
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));

// CONFIGURACION SESSIONS DEL USUARIO
var ttlSeconds = 1800;
var StoreOptions = {
  store: _connectMongo["default"].create({
    mongoUrl: _config["default"].MONGO_ATLAS_URL,
    crypto: {
      secret: 'squirrel'
    }
  }),
  secret: 'shhhhhh',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: ttlSeconds * 1000
  }
};
app.use((0, _expressSession["default"])(StoreOptions));
var mySecret = 'mySecret';
app.use((0, _cookieParser["default"])(mySecret));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use('/api', _routes["default"]);

//Indicamos que vamos a usar passport en todas nuestras rutas
app.use(_passport["default"].initialize());

//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(_passport["default"].session());

// Cuando un usuario se autentique correctamente, passport va a devolver en la session la info del usuario
_passport["default"].use('login', _users.loginFunc);

//signUpFunc va a ser una funcion que vamos a crear y va a tener la logica de registro de nuevos usuarios
_passport["default"].use('signup', _users.signUpFunc);

// MIDDLEWARE DE ERRORES
app.use(function (err, req, res, next) {
  _logger["default"].info(err);
  res.status(500).json({
    error: 'an error occurred',
    msg: err.stack
  });
});
var _default = app;
exports["default"] = _default;