import winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, timestamp, prettyPrint } = format;
const { Console } = transports;

const logConfiguration = {
  level: 'info',
  format: combine(timestamp(), prettyPrint()),
  transports: [new Console({ level: 'info' })],
};

const logger = createLogger(logConfiguration);


export default logger;