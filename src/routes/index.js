import Router from 'express';
// importar el modelo de cada cosa
import { ProductoModel } from '../model/producto';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: "Fetch desde el SERVIDOR / ROUTER"
    })
})

router.post('/productos', async (req,res) => {

    try {

        const {nombre, descripcion, precio} = req.body;

        const nuevoProducto = await ProductoModel.create({
            nombre,
            descripcion,
            precio
        })

        res.json({
            msg: "PRODUCTO AGREGADO CON EXITO",
            data: nuevoProducto
        })



    } catch(err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack,
          }) 
    }
})

export default router;