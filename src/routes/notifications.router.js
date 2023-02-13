import { gmailController} from "../controllers/gmail";
import { wppController, inboxController } from "../controllers/whatsapp";

import {Router} from 'express'

const router = Router()


router.post('/gmail', gmailController)

router.post('/whatsapp', wppController); 

router.post('/inbox', inboxController); 


export default router