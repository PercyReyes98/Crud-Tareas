import axios from 'axios'

export const listarTareasReques= async()=>{
  return await axios.get('http://localhost:4000/tareas/listar')
}
export const crearTareaReques= async(tarea)=>{
  return await axios.post('http://localhost:4000/tareas/agregar', tarea,);
}
export const eliminarTareaReques= async(id)=>{
  return await axios.delete(`http://localhost:4000/tareas/eliminar/${id}`)
}
export const mostrarTareaReques = async(id)=>{
  return await axios.get(`http://localhost:4000/tareas/lista/${id}`)
}
export const actualizarTareReques = async(id, valores)=>{
  return await axios.put(`http://localhost:4000/tareas/editar/${id}`, valores)
}
export const cambiarEstadoTareaReques = async(id, estado) =>{
  return await axios.put(`http://localhost:4000/tareas/editar/${id}`, {estado,})
}
