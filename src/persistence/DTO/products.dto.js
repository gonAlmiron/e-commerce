export default class ProductsDTO {
    constructor({name, price}) {
        this.name = name
        this.price = price
    }
}

export const asDto = (prods) => {
        if(Array.isArray(prods)) 
            return prods.map(p => new ProductsDTO(p))
        else
            return new ProductsDTO(prods)
        }


