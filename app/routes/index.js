import {Router} from 'express';
import cita from './citamedica.routes.js';
import paciente from './paciente.routes.js';

const route = Router();

route.get('/', (req, res) => {
    res.send('Bienvenido a la API de Citas Médicas');
});
route.use('/citas', cita);
route.use('/pacientes', paciente);

export default route;