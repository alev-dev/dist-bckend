const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const routes = require('./routes');

//database
require('./database/config');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
routes(app);
app.get('/', (req, res) => {
    res.send('welcome');
});

module.exports = server;
