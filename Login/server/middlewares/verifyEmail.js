import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export async function verifyEmail(req, res, next) {
  const { token } = req.query;
  if (!token) {
    return res.status(400).json({ error: "Token faltante" });
  }

  try {
    const { user_id } = jwt.verify(token, process.env.ACTIVATION_TOKEN_SECRET);
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    if (user.is_verified) {
      return res.json({ message: "Cuenta ya estaba verificada." });
    }

    user.is_verified = true;
    await user.save();

    // ponemos el mensaje en res.locals para que la ruta lo envíe
    res.locals.verifyMessage = "Cuenta verificada con éxito.";
    next();
  } catch (err) {
    return res.status(400).json({ error: "Token inválido o expirado." });
  }
}