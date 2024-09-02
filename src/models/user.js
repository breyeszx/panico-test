// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  name: String,
  lastName: String,
  rut: String,
  emergencyContacts: [
    {
      name: String,
      relation: String,
      number: String,
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
