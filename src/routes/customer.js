//Método de express (router). 
const express = require('express');
const router = express.Router(); //Nos permite reutilizar las rutas

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);

module.exports = router;