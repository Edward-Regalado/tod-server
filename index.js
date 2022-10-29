'use strict';

require('dotenv').config();

const port = process.env.PORT ||3001;

const server = require('./src/server.js');
server.start(port);
