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
            const document = await this.collection.create(doc);
            return document;
        } catch (error) {
            logger.error(error);
        }
    }

    async getAll() {
        try {
            const docs = await this.collection.find({});
            return docs;
        } catch (error) {
            logger.error(error);
        }
    }

    async getProduct(id) {
        try {
            const product = await this.collection.findById(id)
            return product;
        } catch (err) {
            logger.error(err)
        }
    }
}