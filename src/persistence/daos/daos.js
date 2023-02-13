import logger from "../../services/logger.js";
import DaoMongoDB from '../daos/dao-MongoDB/mongodb' 
import { ProductSchema } from "./dao-MongoDB/schemas/product.js";


let dao;
let option = process.argv[2]


switch (option) {
    case 'mongo':
        dao = new DaoMongoDB('product', ProductSchema);
        dao.initMongoDB()
        logger.info(option);
        break;
    default:
        dao = new DaoMongoDB('product', ProductSchema);
        break;
}

export async function save (obj) {
    return await dao.save(obj);
}

export async function getAll() {
    return await dao.getAll();
}