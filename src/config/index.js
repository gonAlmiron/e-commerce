import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_URL,
    PUERTO: process.env.PUERTO || 3002
}