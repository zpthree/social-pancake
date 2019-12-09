require('dotenv').config();
const createServer = require('./createServer');

const server = createServer();

server.start(() => console.log(`Server is running on http://localhost:4000`));
