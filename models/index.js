const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://root:root@cluster0-07urh.mongodb.net/code-your-future?retryWrites=true&w=majority";

const { Tareas } = require("./Tareas");

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
  !error
    ? console.log("Conexión exitosa")
    : console.log(error);
});

module.exports = { Tareas };
