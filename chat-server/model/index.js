const { Database } = require('mongorito');
const db = new Database();
const config = require('../config.json');
const _ = require('lodash');
const log4js = require('log4js') ;
const User = require('./user');
log4js.configure({
    appenders: { auth: { type: 'console' } },
    categories: { default: { appenders: ['auth'], level: 'trace' } }
});
const logger = log4js.getLogger('chat-server');
(async () => {
    await db.connect(config.db);
    await db.register(User);
    logger.info('connect db success');
})()
