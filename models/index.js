const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://minotad66:tisuca66@cluster0-mu7nr.mongodb.net/test?retryWrites=true&w=majority"

const { Tareas } = require("./Tareas");

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
  !error
    ? console.log("Conexión exitosa")
    : console.log(error);
});

module.exports = { Tareas };
