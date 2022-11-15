import axios from 'axios'

export const listarTareasReques= async()=>{
  return await axios.get('https://crud-tareas-production.up.railway.app/tareas/listar')
}
export const crearTareaReques= async(tarea)=>{
  return await axios.post('https://crud-tareas-production.up.railway.app/tareas/agregar', tarea,);
}
export const eliminarTareaReques= async(id)=>{
  return await axios.delete(`https://crud-tareas-production.up.railway.app/tareas/eliminar/${id}`)
}
export const mostrarTareaReques = async(id)=>{
  return await axios.get(`https://crud-tareas-production.up.railway.app/tareas/lista/${id}`)
}
export const actualizarTareReques = async(id, valores)=>{
  return await axios.put(`https://crud-tareas-production.up.railway.app/tareas/editar/${id}`, valores)
}
export const cambiarEstadoTareaReques = async(id, estado) =>{
  return await axios.put(`https://crud-tareas-production.up.railway.app/tareas/editar/${id}`, {estado,})
}
