import passport from 'passport';
import logger from '../services/logger.js';
import { passportOptions } from '../services/auth.js';

export const signUpController = (req, res, next) => {
    passport.authenticate('signup', passportOptions, (err, user, info) => {
      console.log('Info SIGNUP');
      console.log(err, user, info);
      if (err) {
        return next(err);
      }
      if (!user) return res.status(401).json(info);
  
    
      logger.info(`Se registró un usuario: ${user.username} \n\n. Ruta /SIGNUP. Metogo POST`)
  
      res.json({ 
        msg: 'signup OK',
        user: user });
    })(req, res, next);
  }

export const loginController = (req, res, user) => {
      logger.info(`Se logeó un usuario. Ruta /LOGIN. Metogo POST`)
      res.json( {
        msg: `Login OK!!`
      })
    }

