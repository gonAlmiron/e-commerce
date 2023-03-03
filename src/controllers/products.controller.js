import { saveProduct, getAllProducts, getProduct } from '../services/product.services'

export const saveController = async (req, res) => {
    const { body } = req;
    try {
        const product = await saveProduct(body);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
}

export const getAllController = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}

export const getByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const product = await getProduct(id);
        res.json(product)
    } catch (err) {
        console.log(err)
    }
}