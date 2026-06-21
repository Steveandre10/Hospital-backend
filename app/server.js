import express from 'express';
import config from './config/enviroments/index.js';
import {Router} from 'express';

//INICIALIZAR
const server = express();
const router = Router();

server.set('PORT', config.PORT);

router.get('/', (req, res) => {
    res.send('Hola mundo');
})

server.use(router);



export default server;