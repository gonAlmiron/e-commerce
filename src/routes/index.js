import {Router} from 'express';
import AuthRouter from './users.router'
import NotificationRouter from './notifications.router'
import ProductsRouter from './products.router'


const router = Router();

router.get('/', (req, res) => {
     res.json({
        message: "Petición desde el SERVIDOR -> ROUTER"
    })
})

router.use('/auth', AuthRouter)

router.use('/notifications', NotificationRouter)

router.use('/products', ProductsRouter)


export default router;