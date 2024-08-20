"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, MapPin } from "lucide-react";

export default function Hero() {
  const [isPanic, setIsPanic] = useState(false);

  const handlePanic = () => {
    setIsPanic(true);
    // Here you would typically handle the panic action
    console.log("PANIC BUTTON PRESSED!");
    setTimeout(() => setIsPanic(false), 2000); // Reset after 2 seconds
  };

  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-start text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center mt-12">
        Emergency Response System
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-center max-w-2xl">
        In case of extreme urgency, press the panic button below
      </p>
      <Button
        variant="destructive"
        size="lg"
        className={`w-48 h-48 rounded-full text-2xl font-bold shadow-lg transition-all duration-300 ease-in-out ${
          isPanic
            ? "animate-pulse bg-yellow-500"
            : "hover:bg-red-600 hover:scale-105"
        }`}
        onClick={handlePanic}
      >
        {isPanic ? "PANICKING!" : "PANIC"}
        <AlertCircle className="ml-2 h-6 w-6" />
      </Button>
      {isPanic && (
        <p className="mt-8 text-xl animate-bounce">
          Emergency services have been notified!
        </p>
      )}

      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Nearest Auxiliary Services</h2>
        <div className="relative w-full h-80 bg-gray-700 rounded-lg overflow-hidden">
          {/* Simple map representation */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="#4B5563" />
            <path d="M0 20 Q50 0 100 20 T100 50 T0 80 T0 50 Z" fill="#374151" />
          </svg>

          {/* Location markers */}
          <MapPin className="absolute top-1/4 left-1/4 h-8 w-8 text-red-500" />
          <MapPin className="absolute top-1/2 left-2/3 h-8 w-8 text-blue-500" />
          <MapPin className="absolute bottom-1/4 right-1/4 h-8 w-8 text-green-500" />

          {/* You are here marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
            <div className="w-4 h-4 bg-yellow-400 rounded-full absolute top-0" />
          </div>
        </div>
        <div className="mt-4 flex justify-around">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2" />
            <span>Hospital</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2" />
            <span>Police Station</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <span>Fire Station</span>
          </div>
        </div>
      </div>
    </section>
  );
}
