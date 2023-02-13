import {Router} from 'express'
import {saveController, getAllController} from '../controllers/products.controller'
import Handler from 'express-async-handler'


const router = Router()


router.get('/products', Handler(getAllController));
// router.get('/:id', Handler(ProductController.getProductById));
router.post('/products', Handler(saveController));
// router.put('/:id', Handler(ProductController.updateProduct));
// router.delete('/:id', Handler(ProductController.deleteProduct));

export default router