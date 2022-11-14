require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const path = require('path');
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const app = express();

// conexion base de datos
const mongoose = require('./database/db');

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// rutas
app.use('/api/users',require('./routes/users'));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// configuración
app.set('port', process.env.PORT || 3000);

// archivos estaticos
app.use(express.static(path.join(__dirname, '/frontend/public')));;

// iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
