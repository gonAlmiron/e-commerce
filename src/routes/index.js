import {Router} from 'express';
import { gmailController } from '../controllers/gmail.js';
import { inboxController, wppController } from '../controllers/whatsapp.js';
import passport from 'passport';
import { passportOptions } from '../services/auth.js';
import { loginController, signUpController } from '../controllers/users.js';


const router = Router();



router.get('/', (req, res) => {
     res.json({
        message: "Petición desde el SERVIDOR -> ROUTER"
    })
})

router.post('/signup', signUpController);

router.post('/login', passport.authenticate('login', passportOptions), loginController );

router.post('/gmail', gmailController)

router.post('/whatsapp', wppController); 

router.post('/inbox', inboxController); 



export default router;