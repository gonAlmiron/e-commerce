import { asDto } from "../DTO/products.dto";
import { getDao} from "../daos/factory";

export default class ProductsRepository {
    constructor() {
        this.dao = getDao();
    }
    async save (prod) {
        const product = await this.dao.save(prod);
        return product 
    }

    async getAll() {  
        const products = await this.dao.getAll();
        const prodsDTO = asDto(products)
        return prodsDTO;
    }

    async getProduct(id) {
        const product = await this.dao.getProduct(id);
        return product
    }
}

