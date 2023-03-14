const express = require('express');
const mongoose = require("mongoose");
const medicinesRoutes = require("./src/rutas/Estudiante");
const controlRoutes = require("./src/rutas/ControlAcademico");

const app = express();
const port = process.env.PORT || 3000;
var cors = require('cors');
app.use(cors());

//middleware
app.use(express.json());
app.use(medicinesRoutes);
app.use(controlRoutes);
//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

//mongodb conection
mongoose.connect("mongodb+srv://admin:admin@cluster0.ppvtgtu.mongodb.net/Bloz-Cell?retryWrites=true&w=majority")
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error)); 

app.listen(port, () => console.log('server listening on port', port));
