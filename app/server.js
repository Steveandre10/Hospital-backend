import express from 'express';
import config from './config/enviroments/index.js';
import ruta from './routes/index.js';

//INICIALIZAR
const server = express();


server.set('PORT', config.PORT);


server.use(ruta);



export default server;