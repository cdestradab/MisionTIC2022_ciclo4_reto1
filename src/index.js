const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
require('dotenv').config();

//puerto de conexión
const app = express();
const port = process.env.PORT || 3000;

//puerto de activación del servicio
app.listen(port,()=>console.log('server listening on port', port));

//middlewares
app.use('/api', userRoute);
app.use(express.json());

//routes
app.get('/', (req, res)=>{
    res.send('Bienvenido a la API MinTIC')
});

//conexión a la base de datos mongoose
mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(()=> console.log('Conectado con MONGODB ATLAS'))
    .catch((error)=> console.error(error));

