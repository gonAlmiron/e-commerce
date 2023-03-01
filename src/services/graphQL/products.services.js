import { buildSchema } from 'graphql';
import { saveController, getAllController, getProductController } from '../../controllers/graphQL/products.controller'

export const graphqlSchema = buildSchema(`
    type Product{
        id: String!
        name: String
        description: String
        price: Int
}
    type Query{
        getProductController(id:String!):Product
        getAllController:[Product]
        
}
    input InputProduct{
        name: String!
        description: String!
        price: Int!
}
    type Mutation{
         saveController(data:InputProduct):Product
}
`)

export const graphqlRoot = {
    saveController, getAllController, getProductController
}