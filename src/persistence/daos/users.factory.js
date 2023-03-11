import logger from '../../logs/logger';
import DaoMongoDB from './dao-MongoDB/mongodb' 
import {ClientSchema } from "./dao-MongoDB/schemas/user.js";


let dao;
// let option = process.argv[2]
let selectedDao = 'mongo'


switch (selectedDao) {
    case 'mongo':
        dao = new DaoMongoDB('users', ClientSchema);
        dao.initMongoDB()
        break;
    default:
        dao = new DaoMongoDB('users', ClientSchema);
        break;
}

export const save = async (obj) => {
    return await dao.save(obj);
}

export const getAll = async () => {
    return await dao.getAll();
}

export const getById = async (id) => {
    return await dao.getById(id);
}

export const deleteById = async (id) => {
    return await dao.deleteById(id)
}

export const updateById = async (id, prod) => {
    return await dao.updateById(id, prod)
    
}

// EXPORTAMOS EL DAO PARA PODER USARLO EN EL REPOSITORY

export const getDao = () => {
    return dao;
}