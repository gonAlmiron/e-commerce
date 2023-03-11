import server from './services/server';
import Config from './config';
import logger from './logs/logger';
import app from './services/server';

const PORT = process.env.PORT || Config.PUERTO

server.listen(PORT, () => logger.info(`Server UP - Escuchando en el puerto ${PORT} - PID WORKER ${process.pid} `))

server.on('error', (err) => logger.error(err))

    
app.use(compression())