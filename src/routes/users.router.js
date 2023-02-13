import {Router} from 'express'
import { loginController, signUpController } from '../controllers/users.controller';
import passport from 'passport';
import { passportOptions } from '../services/auth';
import Handler from 'express-async-handler'

const router = Router();

router.post(Handler( '/login', passport.authenticate('login', passportOptions), loginController)) ;

router.post( Handler('/signup', signUpController)) ;

router.post('/logout', (req, res) => {
  req.logOut();
  res.json({ message: 'GoodBye!' });
});

export default router;