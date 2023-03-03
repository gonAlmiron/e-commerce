import {Router} from 'express';

import AuthRouter from './users.router'
import NotificationRouter from './notifications.router'
import {getAllController, getByIdController, saveController } from '../controllers/products.controller';

const router = Router();


router.get('/', (req, res) => {
     res.json({
        message: "Petición desde el SERVIDOR -> ROUTER"
    })
})


// router.use('/products', ProductsRouter)

router.use('/auth', AuthRouter)

router.use('/notifications', NotificationRouter)

router.post('/products', saveController)
router.get('/products', getAllController)
router.get('/products/:id', getByIdController)




export default router;