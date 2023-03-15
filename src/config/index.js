import dotenv from 'dotenv';
import logger from '../logs/logger';

dotenv.config();

let mongoDBSRV = process.env.MONGO_ATLAS_URL || 'mongodb+srv://gonDev:1234@planeta-it.o7o4bsp.mongodb.net/PlanetaITGestion?retryWrites=true&w=majority'

if (
    process.env.NODE_ENV == 'TEST=INT' ||
    process.env.NODE_ENV == 'TEST=E2E'
) {
    logger.info('Estamos en un test. usando SRV MONGO TEST');
    mongoDBSRV = process.env.MONGO_ATLAS_URL_TEST || 'mongodb+srv://gonDev:1234@planeta-it-TEST.o7o4bsp.mongodb.net/PlanetaITGestion?retryWrites=true&w=majority'
}


export default {
    MONGO_ATLAS_URL: mongoDBSRV,
    PUERTO: process.env.PUERTO || 8080
}