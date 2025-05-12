import jwt from "jsonwebtoken";

// Middleware para token ->
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token no provided" });
  }
  const token = authHeader.split(" ")[1]; // <- Extraemos solo el token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // <- Guardamos los datos del usuario en la petición
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
