import server from './services/server';
import Config from './config';
import logger from './logs/logger';

const PORT = process.env.PORT || Config.PUERTO

server.listen(PORT, () => logger.info(`Escuchando en el puerto ${PORT} - PID WORKER ${process.pid} `))
    
