import {Router} from 'express';
import { gmailController } from '../controllers/gmail.js';
import { inboxController, wppController } from '../controllers/whatsapp.js';
import passport from 'passport';
import { passportOptions } from '../services/auth.js';
import { loginController, signUpController } from '../controllers/users.controller.js';
import ProductsRouter from './products.router'
import AuthRouter from './users.router'


const router = Router();



router.get('/', (req, res) => {
     res.json({
        message: "Petición desde el SERVIDOR -> ROUTER"
    })
})


router.use('/products', ProductsRouter)

router.use('/auth', AuthRouter)

router.use('/notifications', NotificationRouter)




export default router;