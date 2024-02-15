const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PUERTO = 8080;
require("./database.js");



//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(".src/public"));



app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});