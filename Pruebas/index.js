const express = require("express");
const mongoose = require("mongoose");

const ApisOperacionesMatematicas = require('./src/rutas/ApisOperacionesMatematicas')

const app = express();
const port = 3001;
var cors = require("cors");
app.use(cors());

//middleware
app.use(express.json());
app.use(ApisOperacionesMatematicas);
//rutas
app.get("/", (req, res) => {
  res.send("APIs simmulador de costos");
});

//conexion a mongo db atlas
mongoose
  .connect("mongodb+srv://admin:admin@cluster.dflbb.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Conectado a Mongo DB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () =>
  console.log("El servidor se encuentra en el puerto: ", port)
);
