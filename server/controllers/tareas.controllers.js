import { pool } from "../db.js";

export const getTareas = async (req, res) => {
  try {
    const [resultado] = await pool.query(
      "SELECT*FROM tareas ORDER BY createAt ASC"
    );
    res.json(resultado);
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje });
  }
};
export const getTarea = async (req, res) => {
  try {
    const [resultado] = await pool.query("SELECT * FROM tareas WHERE id=?", [
      req.params.id,
    ]);

    if (resultado.length === 0) {
      return res.status(404).json({ mensaje: "No encontrado" });
    }

    res.json(resultado[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje});
  }
};
export const postTareas = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const [resultado] = await pool.query(
      "INSERT INTO tareas(titulo, descripcion) VALUES( ?, ?)",
      [titulo, descripcion]
    );

    //console.log(resultado);
     res.json({
      id: resultado.insertId,
      titulo,
      descripcion,
    });
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje});
  }
};
export const putTareas = async (req, res) => {
  try {
    const result = await pool.query("UPDATE tareas SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje });
  }
};
export const deleteTareas = async (req, res) => {
  try {
    const [resultado] = await pool.query("DELETE FROM tareas WHERE id= ?", [
      req.params.id,
    ]);
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensaje: "error not found" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: error.mensaje });
  }
};
