import logger from "../../services/logger.js";
import DaoMongoDB from "./dao-mongodb/mongodb.js";
import { UserModel } from "./dao-MongoDB/schemas/user.js";
import * as MongoDB from "./dao-MongoDB/mongodb"

let dao;
let option = process.env.PERSISTENCE


switch (option) {
    case 'mongo':
        dao.initMongoDB();
        dao = MongoDB
        logger.info(option);
        break;
    default:
        dao = new DaoMongoDB('user', UserModel);
        break;
}

export async function save () {
    return await dao.save(obj);
}

export async function getAll() {
    return await dao.getAll();
}