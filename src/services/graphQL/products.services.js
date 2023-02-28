import { buildSchema } from 'graphql';
import { saveController, getAllController } from '../../controllers/graphQL/products.controller'

export const graphqlSchema = buildSchema(`
    input InputProduct{
        name: String!
        description: String!
        price: Int!
        
    }
    type Product{
        id: String!
        name: String!
        description: String!
        price: Int!
    }
    type Query{
        getAllController:[Product]
    }
    type Mutation{
        saveController(data: InputProduct):Product
    }
`)

export const graphqlRoot = {
    saveController, getAllController
}