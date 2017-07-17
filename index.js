'use_strict'

const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')

/*  Conexión a la base de datos a través de mongoose
    y levantamiento del servidor  */
//Elimina el warning DeprecationWarning: Mongoose: mpromise
mongoose.Promise = global.Promise
mongoose.connect(config.db, { useMongoClient: true }, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexion establecida con la base de datos')
  app.listen(config.port, () => {
    console.log(`API Corriendo en http://localhost:${config.port}`)
  })
})
