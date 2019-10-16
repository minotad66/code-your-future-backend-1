const mongoose = require("mongoose");

const tareasSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String
    },
    terminado: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Tareas = mongoose.model("Tareas", tareasSchema);

module.exports = { Tareas };
