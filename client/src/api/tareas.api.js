import axios from 'axios'

export const listarTareasReques= async()=>{
  return await axios.get('https://crud-tareas-production.up.railway.app:8012/tareas/listar')
}
export const crearTareaReques= async(tarea)=>{
  return await axios.post('https://crud-tareas-production.up.railway.app:8012/tareas/agregar', tarea,);
}
export const eliminarTareaReques= async(id)=>{
  return await axios.delete(`https://crud-tareas-production.up.railway.app:8012/tareas/eliminar/${id}`)
}
export const mostrarTareaReques = async(id)=>{
  return await axios.get(`https://crud-tareas-production.up.railway.app:8012/tareas/lista/${id}`)
}
export const actualizarTareReques = async(id, valores)=>{
  return await axios.put(`https://crud-tareas-production.up.railway.app:8012/tareas/editar/${id}`, valores)
}
export const cambiarEstadoTareaReques = async(id, estado) =>{
  return await axios.put(`https://crud-tareas-production.up.railway.app:8012/tareas/editar/${id}`, {estado,})
}
