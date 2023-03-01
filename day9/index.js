// Importing HTTP Server Module
const http = require('http');

const routes = require('./routes')

// Creating the Server.
const server = http.createServer(routes);
server.listen(3000);
