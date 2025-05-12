import Url from "../models/Url.js";

// Controlador para obtener todas las urls acortador por un usuario autenticado ->
export const getUserUrls = async (req, res) => {
  try {
    const urls = await Url.find({ owner: req.user.id });
    return res.json(urls);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching URLs" });
  }
};
