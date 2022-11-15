import {Link} from 'react-router-dom'
function Navbar (){
    return (
        <div className='bg-neutral-800 flex justify-between px-20 py-2'>
            <Link to={'/'} className='text-white font-bold'>
            <h1>TAREAS MYSQL</h1>
            </Link>    
            <ul className='flex gap-x-1'>
                <li>
                    <Link to={'/'} className='bg-slate-200 px-2 py-1'>Inicio</Link>
                </li>
                <li>
                    <Link to={'/tarea'} className='bg-slate-200 px-2 py-1'>Tarea</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar