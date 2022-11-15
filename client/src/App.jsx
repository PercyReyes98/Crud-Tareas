import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import PaginaTareas from './pages/paginaTareas'
import PaginaNuevaTarea from './pages/paginaNuevaTarea'
import NotFoundPage from './pages/notFoundPage'
import Navbar from './components/navbar'
import {TareaContextProvider} from './context/tareaContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-zinc-900 h-screen'>
      <Navbar></Navbar>
      <div className='container mx-auto py-4 px-20'>
      <TareaContextProvider>
    <Routes>
      <Route path='/' element={<PaginaTareas></PaginaTareas>}></Route>
      <Route path='/tarea' element={<PaginaNuevaTarea></PaginaNuevaTarea>}></Route>
      <Route path='/editar/:id' element={<PaginaNuevaTarea></PaginaNuevaTarea>}></Route>
      <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
    </TareaContextProvider>
      </div>
    </div>
    
  )
}

export default App
