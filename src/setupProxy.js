const proxy = require('http-proxy-middleware')
// const target = 'http://10.10.4.192';
const target = 'http://10.10.10.111';

module.exports = function (app) {
    app.use(proxy('/business', { target }))
    app.use(proxy('/common', { target }))
    app.use(proxy('/client', { target }))
    app.use(proxy('/system', { target }))
    app.use(proxy('/test', { target }))
    app.use(proxy('/map', { target }))
}