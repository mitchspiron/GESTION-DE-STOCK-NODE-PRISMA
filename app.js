import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cors())

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
})

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server is working !',
    })
})

import { clientRoutes, produitRoutes, commandeRoutes } from './routes/index.js'
server.use('/client', clientRoutes)
server.use('/produit', produitRoutes)
server.use('/commande', commandeRoutes)

server.listen(process.env.SERVER_PORT)
//console.log('Server is running at http://127.0.0.1:' + process.env.SERVER_PORT)

export default server
