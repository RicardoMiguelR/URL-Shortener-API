import mongoose from "mongoose";

// Creacion de esquema o modelo User ->
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true, // -> Crea automáticamente createdAt y updatedAt para ver cuándo fue creado o actualizado
  }
);

// Exportacion del modelo ->
const User = mongoose.model("User", userSchema);

export default User;
