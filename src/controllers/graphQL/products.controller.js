import { saveProduct, getAllProducts } from '../../services/product.services'

export const saveController = async () => {
        
        const { body } = req;
        const product = await saveProduct(body);
        return product
  
}

export const getAllController = async () => {

        const products = await getAllProducts();
        return products

}