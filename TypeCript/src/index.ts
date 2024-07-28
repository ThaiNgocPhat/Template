import express from 'express';
import http from 'http';
import * as _config from './config'
import Router from './routers';

const app = express();
app.use(express.json());
require('dotenv').config();
app.use('/api/v1', Router);
_config.connection
    .sync()
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log('Database error: ', err);
    });
const server = http.createServer(app);
server.listen(8080, () => {
    console.log('Server listening on port 8080');
})
