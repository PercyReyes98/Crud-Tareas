import { Router } from "express";
import {
  getTareas,
  getTarea,
  postTareas,
  putTareas,
  deleteTareas,
} from "../controllers/tareas.controllers.js";
const router = Router();

router.get("/tareas/listar", getTareas);
router.get("/tareas/lista/:id", getTarea);
router.put("/tareas/editar/:id", putTareas);
router.post("/tareas/agregar", postTareas);
router.delete("/tareas/eliminar/:id", deleteTareas);

export default router;
