import axios from "axios";
import logger from "../logs/logger";

export const axiosEjemplo1 = async() => {
    try {
        const response = await axios.get('http://localhost:3002/api/products');
        logger.info(response.data)
    } catch (err) {
        logger.error(err)
    }
}

