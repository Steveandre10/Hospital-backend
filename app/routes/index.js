import {Router} from 'express';
import cita from './citamedica.routes.js';
import paciente from './paciente.routes.js';

const route = Router();

route.use('/citas', cita);
route.use('/pacientes', paciente);

export default route;