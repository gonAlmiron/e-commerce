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
}