"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
// Asegúrate de que esta ruta es correcta
import Login from "@/components/ui/login";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1>
      <p className="text-xl mb-12">Please log in to access your account</p>

      <Login />
    </div>
  );
}
