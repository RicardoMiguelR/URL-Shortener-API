// Importaciones ->
import mongoose from "mongoose";

// Conexion a BD ->
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB conected");
  } catch (error) {
    console.error("Error, MongoDB connection failure: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
