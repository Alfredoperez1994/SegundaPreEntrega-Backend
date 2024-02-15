const mongoose = require("mongoose");

//nos conectamos a la base de datos

mongoose.connect("mongodb+srv://pereztato20:<password>@cluster0.9vvqe6u.mongodb.net/ecommerce")
.then(() => console.log("Conexion exitosa"))
.catch(() => console.log("Tenemos un error"))