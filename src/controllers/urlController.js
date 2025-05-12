import Url from "../models/Url.js";
import { nanoid } from "nanoid";

// Funcion para acortar url ->
export const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ message: "Required original url" });
  }
  try {
    const shortId = nanoid(6); // <- generamos un slug de 6 caracteres
    const newUrl = new Url({
      originalUrl,
      shortId,
      owner: req.user.id,
    });

    await newUrl.save();

    res.status(201).json({
      shortUrl: `${process.env.BASE_URL}/${shortId}`,
      shortId,
      originalUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Error shortening URL" });
  }
};

// Funcion para redireccionar a url original ->
export const redirectToOriginalUrl = async (req, res) => {
  const { shortId } = req.params;
  try {
    const url = await Url.findOne({ shortId });
    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }
    return res.redirect(url.originalUrl);
  } catch (error) {
    return res.status(500).json({ message: "Error in redirection" });
  }
};
