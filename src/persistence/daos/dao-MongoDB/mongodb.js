import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../../../logs/logger';

dotenv.config();

mongoose.set('strictQuery', false);

export default class DaoMongoDB {
    constructor(collection, schema){
        this.collection = mongoose.model(collection, schema);
        this.initDB = mongoose.connect(process.env.MONGO_ATLAS_URL);
    }

    async initMongoDB() {
        return this.initDB;
    }

    async save(doc) {
        try {
            const newDoc = await this.collection.create(doc);
            return newDoc;
        } catch (error) {
            logger.error(error);
        }
    }

    async saveUser(username, password) {
        try {
            const newUser = await this.collection.create(username, password)
            return newUser
        } catch(error) {
            logger.error(error.message)
            logger.error(error.stack)
        }
    }

    async getAll() {
        try {
            const doc = await this.collection.find({});
            return doc;
        } catch (error) {
            logger.error(error);
        }
    }

    async getOne(username) {
        try {

            const user = await this.collection.findOne(username)
            return user

        } catch(error) {
            logger.error(error.message)
            logger.error(error.stack)
        }
    }

    async getById(id) {
        try {
            const doc = await this.collection.findById(id)
            return doc;
        } catch (err) {
            logger.error(err)
        }
    }

    async deleteById(id) {
        try { 
            const deleted = await this.collection.findByIdAndDelete(id)
            return deleted
        } catch (err) {
            logger.error(err)
        }
    }

    async updateById(id, newData) {
        try {
            const updated = await this.collection.findByIdAndUpdate(id, newData)
            return udated
        } catch(err) {
            logger.error(err)
        }
    }
}