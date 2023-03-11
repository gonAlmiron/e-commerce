import passport from 'passport';
import logger from '../logs/logger.js';
import { passportOptions, getAllUsers } from '../services/users.services.js';

export const signUpController = (req, res, next) => {
    try {
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

  } catch (error) {
    logger.error(error.message)
    logger.error(error.stack)
  }
  }

export const loginController = (req, res) => {
  try {
    
    logger.info(`Se logeó un usuario. Ruta /LOGIN. Metogo POST`)
    res.status(200).json( {
      msg: `Login OK!!`,
      user: req.user
    })
  } catch (error) {
    res.status(501).send(error.message)

  }
    }

export const getAllController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users)
  } catch (error) {
    res.status(501).send(error.message, error.stack)
  }
}

