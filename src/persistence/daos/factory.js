import logger from '../../logs/logger';
import DaoMongoDB from './dao-MongoDB/mongodb' 
import { ProductSchema } from "./dao-MongoDB/schemas/product.js";


let dao;
// let option = process.argv[2]
let selectedDao = 'mongo'


switch (selectedDao) {
    case 'mongo':
        dao = new DaoMongoDB('products', ProductSchema);
        dao.initMongoDB()
        break;
    default:
        dao = new DaoMongoDB('products', ProductSchema);
        break;
}

export async function save (obj) {
    return await dao.save(obj);
}

export async function getAll() {
    return await dao.getAll();
}

// EXPORTAMOS EL DAO PARA PODER USARLO EN EL REPOSITORY

export function getDao() {
    return dao;
}