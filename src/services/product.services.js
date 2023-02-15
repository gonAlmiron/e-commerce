import ProductsRepository from "../persistence/repository/products.repository";
const productsRepository = new ProductsRepository

export async function saveProduct(product){
    const prod = await productsRepository.save(product)
    return prod;
};

export async function getAllProducts() {
    const products = await productsRepository.getAll();
    return products;
};