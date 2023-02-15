import {Router} from 'express'
import {saveController, getAllController} from '../controllers/products.controller'



const router = Router()


router.get('/products', getAllController);
// router.get('/:id', Handler(ProductController.getProductById));
router.post('/products', saveController);
// router.put('/:id', Handler(ProductController.updateProduct));
// router.delete('/:id', Handler(ProductController.deleteProduct));

export default router