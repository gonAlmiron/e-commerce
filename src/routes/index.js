import {Router} from 'express';
import ProductsRouter from './products.router'
import AuthRouter from './users.router'
import NotificationRouter from './notifications.router'

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