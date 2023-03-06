import { saveProduct, getAllProducts, getProduct, deleteProduct, updateProduct } from '../services/product.services'


export const saveController = async (req, res) => {
    
    try {
        const { body } = req;
        const product = await saveProduct(body);
        res.send("PRODUCTO CREADO: " + product);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getAllController = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const product = await getProduct(id);
        res.json(product)
    } catch (err) {
       res.status(501).send(err.message)
    }
}

export const deleteController = async (req, res) => {
    try {
        const {id} = req.params
        const productDeleted = await deleteProduct(id)
        res.send("PRODUCTO ELIMINADO: " + productDeleted )
    } catch(err) {
        res.status(501).send(err.message)
    }
}

export const updateController = async (req, res) => {
    try {
        const {id} = req.params 
        const {body} = req
        const productToUpdate = await getProduct(id);

        if(!productToUpdate){
            res.status(404).json({ message: 'Invalid id' })
          } else {
            const productUpdated = await updateProduct(
                        id, 
                        body
                    )
                    res.status(200).send("PRODUCTO EDITADO: " + productUpdated);
          }

    } catch (err) {
        res.status(501).send(err.message)
    }
}