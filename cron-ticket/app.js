const cron = require('node-cron');
const { syncBD } = require('./tasks/sync-DB');


console.log('inicio de la app');

cron.schedule('1-59/5 * * * * *', syncBD);
