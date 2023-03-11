import {Router} from 'express'
import { loginController, signUpController, getAllController } from '../controllers/users.controller';
import passport from 'passport';
import { passportOptions } from '../services/users.services';



const router = Router();

router.post( '/login', passport.authenticate('login', passportOptions), loginController) ;

router.post('/signup', signUpController);

router.get('/users', getAllController)

router.post('/logout', (req, res) => {
  req.logOut();
  res.json({ message: 'GoodBye!' });
});

export default router;