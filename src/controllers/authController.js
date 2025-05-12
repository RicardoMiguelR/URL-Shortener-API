import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Funcion para registrar usuario ->
export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // se verifica si el usuario ya existe:
    const existingUser = User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "The user already exists!" });
    } else {
      // hasheamos la contraseña antes de guardarla:
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // creamos al usuario:
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();

      // creamos el token jwt:
      const token = jwt.sign(
        { id: newUser._id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(201).json({
        token,
        message: "Created user!",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Funcion para el login ->
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // buscamos al usuario por su email:
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      // comparar contraseña enviada con la almacenada (ya encriptada):
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        return res.status(400).json({ message: "Incorrect password!" });
      }

      // Gererar un nuevo token:
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        token,
        message: "Succesful login!",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
