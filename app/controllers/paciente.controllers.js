import { pool } from '../config/db/basedatos.js';

export const actualizarPaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, telefono } = req.body;

        const [result] = await pool.query(
            'UPDATE pacientes SET nombre = ?, telefono = ? WHERE id = ?',
            [nombre, telefono, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Paciente no encontrado" });
        }

        res.json({ msg: "Paciente actualizado", id });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const obtenerPacientes = async(req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM pacientes');
        res.json(rows);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

export const eliminarPaciente = async (req, res) => {
    try{
        const { id } = req.params;

        const [result] = await pool.query(
            'DELETE FROM pacientes WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Paciente no encontrado" });
        }

        res.json({ msg: "Paciente eliminado", id });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

export const crearPaciente = async (req, res) => {
    
    try {
        const { nombre, telefono } = req.body;

        const [result] = await pool.query(
            'INSERT INTO pacientes (nombre, telefono) VALUES (?, ?)',
            [nombre, telefono]
        );
        res.json({
            msg: "PACIENTE REGISTRADO",
            id: result.insertId
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}
