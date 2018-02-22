var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var fs = require('fs');
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port, function() {
    console.log('\x1b[36mjson-server is running!');
});