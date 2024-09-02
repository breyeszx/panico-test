// pages/api/user/emergency-contacts.js
import dbConnect from "../../../lib/mongodb";
import User from "../../models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    await dbConnect();

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update emergency contacts
    user.emergencyContacts = req.body.emergencyContacts;
    await user.save();

    res
      .status(200)
      .json({ message: "Emergency contacts updated successfully" });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid token" });
    }
    console.error("Error in /api/emergency-contacts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
