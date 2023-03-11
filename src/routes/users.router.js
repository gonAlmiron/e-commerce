import {Router} from 'express'
import { loginController, signUpController, getAllController } from '../controllers/users.controller';
import passport from 'passport';
import { passportOptions } from '../services/users.services';
import logger from '../logs/logger';



const router = Router();

router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', passportOptions, (err, user, info) => {
    console.log('Info SIGNUP');
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);

  
    logger.info(`Se registró un usuario: ${user.username} \n\n. Ruta /SIGNUP. Metogo POST`)

    res.json({ msg: 'signup OK' });
  })(req, res, next);
});

router.post('/login', passport.authenticate('login', passportOptions), (req, res, user) => {
    logger.info(`Se loge{o} un usuario. Ruta /LOGIN. Metogo POST`)
    res.json( {
      msg: `Login OK!!`
    })
  },
);

router.get('/users', getAllController)

router.post('/logout', (req, res) => {
  req.logOut();
  res.json({ message: 'GoodBye!' });
});

export default router;