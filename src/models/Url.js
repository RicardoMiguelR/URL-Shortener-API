import mongoose from "mongoose";

// Schema o modelo para el url acortador ->
const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // -> Crea automáticamente createdAt y updatedAt para ver cuándo fue creado o actualizado
  }
);

// Exportacion del modelo ->
const Url = mongoose.model("Url", urlSchema);

export default Url;
