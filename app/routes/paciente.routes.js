import {
    crearPaciente,
    actualizarPaciente,
    eliminarPaciente,
    obtenerPacientes
} from '../controllers/paciente.controllers.js';
import {Router} from 'express';

const route = Router();

route.get('/', obtenerPacientes);
route.post('/', crearPaciente);
route.patch('/:id', actualizarPaciente);
route.delete('/:id', eliminarPaciente);

export default route;