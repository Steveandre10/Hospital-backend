import {
    eliminarCita, 
    crearCita, 
    actualizarCita, 
    obtenerCitas
} from '../controllers/cita.controllers.js';
import {Router} from 'express';

const route = Router();

route.get('/', obtenerCitas);
route.post('/', crearCita);
route.patch('/', actualizarCita);
route.delete('/', eliminarCita);

export default route;