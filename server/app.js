const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const keys = require('./keys')

app.use(bodyParser());



module.exports = app;