import {gmailController} from '../controllers/notifications.controller'
import { wppController, inboxController } from '../controllers/notifications.controller'

import {Router} from 'express'

const router = Router()


router.post('/gmail', gmailController)

router.post('/whatsapp', wppController); 

router.post('/inbox', inboxController); 


export default router