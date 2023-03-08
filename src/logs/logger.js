import winston from 'winston';
import Config from '../config';

const { createLogger, format, transports } = winston;
const { combine, timestamp, prettyPrint } = format;
const { Console, File } = transports;

const logConfiguration = {
  level: 'info',
  format: combine(timestamp(), prettyPrint()),
  transports: [new Console({ level: 'info' })],
};

const logger = createLogger(logConfiguration);


export default logger;