const express = require("express");
const cors = require("cors")
const app = express();
const { Tareas } = require("./models");
const PORT = process.env.PORT || 4000

app.use(express.urlencoded({ extended: false })); // Permite aceptar o no archivos media
app.use(express.json()); // Convierte la info que llega desde el cliente (front end) en json
app.use(cors()) // Restringe por medio de la ip los dispositivos que puedan hacer peticiones a nuestra API

// END POINTS
app.get("/", (request, response) => {
  response.send("Hola Mundo");
});

app.post("/api/v1/crear/tarea", (req, res) => {
  const nuevaTarea = Tareas(req.body);

  nuevaTarea.save((error, tarea) => {
    !error ? res.status(201).send(tarea) : res.status(409).send(error);
  });
});

app.get("/api/v1/obtener/todas/tareas", (req, res) => {
  Tareas.find({terminado: false})
    .then(tareas => {
      res.status(200).send(tareas);
    })
    .catch(err => {
      res.status(404).send(err);
    });
});

app.get("/api/v1/obtener/tarea/:tareaid", (req, res) => {
  Tareas.findById(req.params.tareaid)
    .then(tarea => {
      res.status(200).send(tarea);
    })
    .catch(err => {
      res.status(404).send(err);
    });
});

app.put("/api/v1/modificar/tarea/:tareaid", (req, res) => {
  Tareas.findByIdAndUpdate(req.params.tareaid, { $set: req.body }, { new: true })
    .then(tarea => {
      res.status(200).send(tarea);
    })
    .catch(err => {
      res.status(404).send(err);
    });
});

app.delete("/api/v1/borrar/tarea/:tareaid", (req,res)=>{
  Tareas.findByIdAndUpdate(req.params.tareaid, {$set: {terminado: true}}, {new:true})
  .then((tarea) => {
    res.status(200).send({mensaje: `La tarea ha sido terminada`})
  }).catch((err) => {
    res.status(404).send(err);
  });
})

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
