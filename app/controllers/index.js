import { insertarPaciente, eliminarPaciente, modificarPaciente, consultarPaciente} from './paciente.controlers.js';
import {insertarCita, eliminarCita, modificarCita, consultarCita} from './cita.controllers.js';

export default {
    paciente: {
        insertarPaciente: insertarPaciente,
        eliminarPaciente: eliminarPaciente,
        consultarPaciente: consultarPaciente,
        modificarPaciente: modificarPaciente,
    },
    cita: {
        insertarCita: insertarCita,
        eliminarCita: eliminarCita,
        modificarCita: modificarCita,
        consultarCita: consultarCita
    }
}   