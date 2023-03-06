import ProductsRepository from "../persistence/repository/products.repository";

const productsRepository = new ProductsRepository

export const saveProduct = async (product) => {
    const prod = await productsRepository.save(product)
    return prod;
};

export const getAllProducts = async() => {
    const products = await productsRepository.getAll();
    return products;
};

export const getProduct = async(id) => {
    const product = await productsRepository.getProduct(id)
    return product;
}

export const deleteProduct = async(id) => {
    const productDelete = await productsRepository.deleteProduct(id)
    return productDelete
}

export const updateProduct = async(id, product) => {
    const productUpdate = await productsRepository.updateProduct(id, product)
    return productUpdate
}