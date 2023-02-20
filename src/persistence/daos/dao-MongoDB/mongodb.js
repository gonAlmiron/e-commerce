import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../../../logs/logger';
// import { asDto } from '../../DTO/products.dto';

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
            logger.info(error);
        }
    }

    async getAll() {
        try {
            const docs = await this.collection.find({});
            // return asDto(docs)
            return docs;
        } catch (error) {
            logger.info(error);
        }
    }
}