import {Router} from 'express'
import { saveMessageController, getMessagesController } from '../controllers/chat.controller'

const router = Router()

router.post('/save', saveMessageController)

router.get('/messages', getMessagesController)

export default router