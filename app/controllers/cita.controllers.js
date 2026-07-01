import { pool } from '../config/db/basedatos.js';

export const crearCita = async (req, res) => {
    try {
        const { cita, estado } = req.body;

        const [result] = await pool.query(
            'INSERT INTO citas (cita, estado) VALUES (?, ?)',
            [cita, estado]
        );

        res.json({
            msg: "CITA REGISTRADA",
            id: result.insertId
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const actualizarCita = async (req, res) => {
    try{
        const { id, cita, estado } = req.body;

        const [result] = await pool.query(
            'UPDATE citas SET cita = ?, estado = ? WHERE id = ?',
            [cita, estado, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "CITA NO ENCONTRADA" });
        }

        res.json({
            msg: "CITA ACTUALIZADA",
            id: id
        });

    }
    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}   

export const obtenerCitas = async (req, res) => {
   try {

    const [rows] = await pool.query('SELECT * FROM citas');
    res.json(rows);

   } catch (error) {
         res.status(500).json({
              error: error.message
         });
    }
}

export const eliminarCita = async (req, res) => {
    try{
        const { id } = req.body;

        const [result] = await pool.query('DELETE FROM citas WHERE id = ?', [id]);


        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "CITA NO ENCONTRADA" });
        }

        res.json({
            msg: "CITA ELIMINADA",
            id: id
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}   
 