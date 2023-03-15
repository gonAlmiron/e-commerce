import express from 'express';
import cors from 'cors'
import MongoStore from 'connect-mongo';
import Config from '../config';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import mainRouter from '../routes';
import { loginFunc, signUpFunc } from './users.services';
import passport from 'passport';
import logger from '../logs/logger';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import {graphqlRoot, graphqlSchema} from './graphQL/products.services.js'
import { info } from '../docs/info';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import http from 'http';
import io from 'socket.io';


const app = express()
app.use(express.json())

// CONFIGURACION DE GRAPHQL
app.use(
  '/graphql',
  graphqlHTTP({     
    schema: graphqlSchema,  
    rootValue: graphqlRoot, 
    graphiql: true, 
  })
);

// DOCUMENTACION
const specs = swaggerJSDoc(info)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))


// CONFIGURACION SESSIONS DEL USUARIO
const ttlSeconds = 1800;
const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: Config.MONGO_ATLAS_URL,
    crypto: {
      secret: 'squirrel',
    },
  }),
  secret: 'shhhhhh',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

app.use(session(StoreOptions));
const mySecret = 'mySecret';

app.use(cookieParser(mySecret));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors())
app.use('/api', mainRouter);


//Indicamos que vamos a usar passport en todas nuestras rutas
app.use(passport.initialize());

//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(passport.session());

// Cuando un usuario se autentique correctamente, passport va a devolver en la session la info del usuario
passport.use('login', loginFunc);

//signUpFunc va a ser una funcion que vamos a crear y va a tener la logica de registro de nuevos usuarios
passport.use('signup', signUpFunc);


// PREPARACION WEBSOCKETS PARA CHAT

const myHTTPServer = http.Server(app)

const socketIO = io(myHTTPServer)

// conexion de websocket y envio de eventos

let users = []

socketIO.on('connection', (socket) => {

  console.log(`⚡: ${socket.id} user just connected!`);

  //Listens and logs the message to the console
  socket.on('message', (data) => {
    socketIO.emit('messageResponse',data)
    console.log(data)
  });

    socket.on('newUser', (data) => {
      users.push(data);
      console.log(` Usuarios: ${users}`);
      socketIO.emit('newUserResponse', users);
    });

  socket.on('typing', (data) => 
  socket.broadcast.emit('typingResponse', data));

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    users = users.filter((user) => user.socketID !== socket.id);
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});



// MIDDLEWARE DE ERRORES
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({
    error: 'an error occurred',
    msg: err.stack
  });
});

export default myHTTPServer;