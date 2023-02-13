import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../../../services/logger';


dotenv.config();

mongoose.set('strictQuery', false);

export const initMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_URL)
        logger.info('Conectado a MongoDB')
    } catch (error) {
        logger.info(error)  
    }
}
 

   export const save = async (doc) => {
        try {
            const document = await this.collection.create(doc);
            return document;
        } catch (error) {
            logger.info(error);
        }
    }

    export const getAll = async () => {
        try {
            const docs = await this.collection.find({});
            return docs;
        } catch (error) {
            logger.info(error);
        }
    }
