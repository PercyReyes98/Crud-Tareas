import { createContext, useContext, useState } from "react";
import {
  listarTareasReques,
  eliminarTareaReques,
  crearTareaReques,
  mostrarTareaReques,
  actualizarTareReques,
  cambiarEstadoTareaReques,
} from "../api/tareas.api.js";

export const TareaContext = createContext();

export const useTarea = () => {
  const contexto = useContext(TareaContext);
  if (!contexto) {
    throw new Error("No existe el contexto");
  }
  return contexto;
};
export const TareaContextProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);
  async function cargarTareas() {
    const response = await listarTareasReques();
    setTareas(response.data);
  }
  const eliminarTarea = async (id) => {
    try {
      const response = await eliminarTareaReques(id);
      setTareas(tareas.filter((tarea) => tarea.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const crearTarea = async (tarea) => {
    try {
      const response = await crearTareaReques(tarea);
      console.log(response);
      //useState([...tareas, response.data])
    } catch (error) {
      console.error(error);
    }
  };
  const mostrarTarea = async (id) => {
    try {
      const response = await mostrarTareaReques(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const actualizarTarea = async (id, valores) => {
    try {
      const response = await actualizarTareReques(id, valores);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const cambiarEstadoTarea = async (id) => {
    try {
      const tareaEcontrada = tareas.find((tarea) => tarea.id === id);
      await cambiarEstadoTareaReques(id, tareaEcontrada.estado === 0 ? true : false);
      tareas.map((tarea)=> tarea.id ===id ? tarea.estado = tarea.estado=== 0 ? 1 : 0 : tarea.estado)
      setTareas([...tareas]);
      //setTareas(tareas.map((tarea)=> tarea.id === id ? {... tarea, estado: !tarea.estado} : tarea))
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TareaContext.Provider
      value={{
        tareas,
        cargarTareas,
        eliminarTarea,
        crearTarea,
        mostrarTarea,
        actualizarTarea,
        cambiarEstadoTarea,
      }}
    >
      {children}
    </TareaContext.Provider>
  );
};
