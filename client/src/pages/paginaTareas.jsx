import {useEffect} from 'react'
import TareaCard from '../components/tareaCard.jsx'
import {useTarea} from '../context/tareaContext'
function PaginaTareas(){
    const {tareas, cargarTareas} = useTarea()
    useEffect(()=>{
        cargarTareas()
    },[])
    function renderMain(){
        if(tareas.length===0) return <h1>NO HAY TAREAS</h1>
        return tareas.map((tarea)=>
            <TareaCard tarea={tarea} key={tarea.id}></TareaCard>)
    }
    return (
         <div>
            <h1 className='text-5xl text-white font-bold text-center'>TAREAS</h1>
            <div className='grid grid-cols-3 gap-3'>
            {renderMain()}
            </div>
        </div>
    )
}
export default PaginaTareas