const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000
const userRoutes = require('./routes/user')
require('dotenv').config();

//middleware
app.use('/api', userRoutes)

//routes
app.get('/', (req, res)=>{
    res.send('Bienvenido a la API MinTIC')
})
app.listen(port,()=>console.log('server listening on port', port))

//conexión a la base de datos mongoose
mongoose.connect(process.env.MONGODB_CONNECT)
    .then(()=> console.log('Conectado con MONGODB ATLAS'))
    .catch(()=> console.log(error))

