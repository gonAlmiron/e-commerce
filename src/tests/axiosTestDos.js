import axios from "axios";
import logger from "../logs/logger";

const data = {
    name: "Mouse + Teclado Logitech MK270",
    description: "Combo de mouse y teclado inalámbricos USB de gran calidad y poca latencia",
    price: 7400
}

export const axiosEjemplo2 = async() => {
    try {
        const resp = await axios.post('http://localhost:3002/api/products', data)
        logger.info(resp.data)
    } catch (err) {
        logger.error(err)
    }
} 