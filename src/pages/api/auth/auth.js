// src/lib/auth.js
import { hash, compare } from "bcryptjs";

// Función para verificar la contraseña
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

// Función para hashear una contraseña (por si necesitas crear usuarios nuevos)
export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
