 import express from 'express'
 import {PORT} from './config.js'
 import {dirname, join} from 'path'
 import {fileURLToPath} from 'url'
 import indexRoute from '../server/routes/index.routes.js'
 import tareasRoute from '../server/routes/tareas.routes.js'
 import cors from 'cors'

 const app = express()
 const __dirname = dirname(fileURLToPath(import.meta.url))
 
 app.use(cors())
 app.use(express.json())

 app.use(indexRoute)
 app.use(tareasRoute)
 app.use(express.static(join(__dirname, '../client/dist')))
 
 app.listen(PORT)
 console.log(`el servidor esta escuchando en el puerto ${PORT}`)