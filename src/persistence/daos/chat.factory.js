import logger from '../../logs/logger';
import DaoMongoDB from './dao-MongoDB/mongodb' 
import {MessageSchema } from "./dao-MongoDB/schemas/message.js";


let dao;
// let option = process.argv[2]
let selectedDao = 'mongo'


switch (selectedDao) {
    case 'mongo':
        dao = new DaoMongoDB('messages', MessageSchema);
        dao.initMongoDB()
        break;
    default:
        dao = new DaoMongoDB('messages', MessageSchema);
        break;
}

export const save = async (obj) => {
    return await dao.save(obj);
}

export const getAll = async () => {
    return await dao.getAll();
}

export const getDao = () => {
    return dao;
}