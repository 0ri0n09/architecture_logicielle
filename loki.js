const { createLogger, format, transports } = require('winston');
const LokiTransport = require('winston-loki');

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new LokiTransport({
      host: 'http://localhost:3100',
      json: true
    })
  ]
});
