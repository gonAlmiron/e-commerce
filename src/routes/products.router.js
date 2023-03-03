import {Router} from 'express'
import {saveController, getAllController, getByIdController} from '../controllers/products.controller'



const router = Router()


router.get('/', getAllController);
// router.get('/:id', Handler(ProductController.getProductById));
router.post('/', saveController);
router.get('/:id', getByIdController)
// router.put('/:id', Handler(ProductController.updateProduct));
// router.delete('/:id', Handler(ProductController.deleteProduct));

export default router