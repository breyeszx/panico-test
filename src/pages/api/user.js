// pages/api/user.js
import dbConnect from "../../../lib/mongodb";
import User from "../../models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Verificar el token JWT
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Conectar a la base de datos
    await dbConnect();

    // Buscar el usuario en la base de datos
    const user = await User.findById(userId).select("-password"); // Excluir el campo de contraseña

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Devolver los datos del usuario
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid token" });
    }
    console.error("Error in /api/user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
