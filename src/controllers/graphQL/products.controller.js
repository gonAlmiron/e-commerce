import { saveProduct, getAllProducts, getProduct } from '../../services/product.services'

export const saveController = async ({data}) => {
        
        const newObj = {...data}
        const product = await saveProduct(newObj);
        return product
  
}

export const getAllController = async () => {

        const products = await getAllProducts();
        return products

}

export const getProductController = async (args) => {
        const { id } = args
        const product = await getProduct(id);
        return product
}