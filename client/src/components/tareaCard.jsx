import { useTarea } from "../context/tareaContext";
import {useNavigate} from 'react-router-dom'
const TareaCard = ({ tarea }) => {
  const {eliminarTarea, cambiarEstadoTarea} = useTarea();
  const navegacion = useNavigate();
  const handleEstado = async()=>{
    await cambiarEstadoTarea(tarea.id)
  }
  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
      <h2 className="text-sm font-bold">{tarea.titulo}</h2>
      <span>{tarea.estado === 0 ? "❌" : "✔"}</span>
      </header>
      <p className="text-xs">{tarea.descripcion}</p>
      <span>{tarea.createAt}</span>
      <div className="flex gap-x-1">
      <button className="bg-slate-300 px-2 py-1 text-black" onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
      <button className="bg-slate-300 px-2 py-1 text-black" onClick={()=>navegacion(`/editar/${tarea.id}`)}>Editar</button>
      <button className="bg-slate-300 px-2 py-1 text-black" onClick={()=>handleEstado(tarea.estado)}>Estado</button>
      </div>
      
    </div>
  );
};
export default TareaCard;
