import {Router} from 'express'
import {saveController, getAllController, getByIdController, deleteController, updateController} from '../controllers/clients.controller'



const router = Router()


router.get('/', getAllController);

router.post('/', saveController);

router.get('/:id', getByIdController)

router.delete('/:id', deleteController)

router.put('/:id', updateController)



export default router