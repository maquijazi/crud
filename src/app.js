const express = require('express'); //Requerimos express
const path = require('path');//Módulo para unir directorios.
const morgan = require('morgan');
const mysql = require('mysql');//Llamada a MySQL
const myConnection = require('express-myconnection');//Módulo para el uso de MYSQL


const app = express(); //Lo inicializamos

//Import routes
const customerRoutes = require('./routes/customer');

//Settings. Configuración
app.set('port', process.env.PORT || 3000);//Revisa que puertos están disponibles
app.set('view engine', 'ejs');//Configuración de motor de plantillas
app.set('views', path.join(__dirname, 'views'));

//middlewares (ejecución de funciones antes de que lleguen)
app.use(morgan('dev'));
app.use(myConnection(mysql, {
host: 'localhost',
user: 'root',
password: 'contraseña',
port: 3306,
database: 'crud'
}, 'single'));

//Routes

app.use('/', customerRoutes);//El servidor usa las rutas escritas en customerRoutes

//static files

app.use(express.static(path.join(__dirname, 'public')));

//Staring on server
app.listen(3000, () =>{ //Inicializamos el servidor
    console.log('Server on port 3000')
});


