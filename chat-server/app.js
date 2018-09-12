/**
 *  chatroom的server入口
 */
const Koa = require('koa');
const config = require('./config.json')
const app = new Koa();
const log4js = require('log4js');
log4js.configure({
    appenders: { auth: { type: 'console' } },
    categories: { default: { appenders: ['auth'], level: 'trace' } }
});
const logger = log4js.getLogger('chat-server');
app.listen(config.port, async () => {
    logger.info(`server run on http://localhost:${config.port}`);
});