import logger from '../../logs/logger';
import DaoMongoDB from './dao-MongoDB/mongodb' 
import {UserSchema } from "./dao-MongoDB/schemas/user.js";


let dao;
// let option = process.argv[2]
let selectedDao = 'mongo'


switch (selectedDao) {
    case 'mongo':
        dao = new DaoMongoDB('user', UserSchema);
        dao.initMongoDB()
        break;
    default:
        dao = new DaoMongoDB('user', UserSchema);
        break;
}

export const saveUser = async (username, password) => {
    return await dao.save(username, password);
}

export const getAll = async () => {
    return await dao.getAll();
}

export const getUser = async (username) => {
    return await dao.getOne(username)
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