"use client";
import { useState } from "react";
import { Building2, Dumbbell, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Eventos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-lime-200 to-emerald-300 p-6 rounded-lg shadow-lg">
      {/* <h1 className="text-2xl font-bold text-purple-800 bg-purple-200 rounded-full py-2 px-4 mb-6 inline-block">
        Eventos Cercanos
      </h1> */}
      <Button className="text-2xl font-bold text-purple-800 bg-purple-200 rounded-full py-2 px-4 mb-6 inline-block">
        Eventos Cercanos
      </Button>

      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-center mb-2">
            <Building2 className="w-6 h-6 mr-2 text-gray-600" />
            <span className="font-semibold">MUNICIPALIDAD</span>
          </div>
          <h2 className="text-xl font-bold mb-2">10 MAYO REMEDIOS GRATIS</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-semibold py-1 px-3 rounded-full text-sm"
          >
            MAS INFORMACIÓN
          </Button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-center mb-2">
            <Building2 className="w-6 h-6 mr-2 text-gray-600" />
            <span className="font-semibold">MUNICIPALIDAD</span>
          </div>
          <h2 className="text-xl font-bold mb-2">10 MAYO REMEDIOS GRATIS</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-semibold py-1 px-3 rounded-full text-sm"
          >
            MAS INFORMACIÓN
          </Button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-center mb-2">
            <Building2 className="w-6 h-6 mr-2 text-gray-600" />
            <span className="font-semibold">MUNICIPALIDAD</span>
          </div>
          <h2 className="text-xl font-bold mb-2">10 MAYO REMEDIOS GRATIS</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-semibold py-1 px-3 rounded-full text-sm"
          >
            MAS INFORMACIÓN
          </Button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-center mb-2">
            <Building2 className="w-6 h-6 mr-2 text-gray-600" />
            <span className="font-semibold">MUNICIPALIDAD</span>
          </div>
          <h2 className="text-xl font-bold mb-2">10 MAYO REMEDIOS GRATIS</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-semibold py-1 px-3 rounded-full text-sm"
          >
            MAS INFORMACIÓN
          </Button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-center mb-2">
            <Building2 className="w-6 h-6 mr-2 text-gray-600" />
            <span className="font-semibold">MUNICIPALIDAD</span>
          </div>
          <h2 className="text-xl font-bold mb-2">10 MAYO REMEDIOS GRATIS</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-semibold py-1 px-3 rounded-full text-sm"
          >
            MAS INFORMACIÓN
          </Button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-center mb-2">
            <Building2 className="w-6 h-6 mr-2 text-gray-600" />
            <span className="font-semibold">MUNICIPALIDAD</span>
          </div>
          <h2 className="text-xl font-bold mb-2">10 MAYO REMEDIOS GRATIS</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-semibold py-1 px-3 rounded-full text-sm"
          >
            MAS INFORMACIÓN
          </Button>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-center mb-2">
            <Dumbbell className="w-6 h-6 mr-2 text-gray-600" />
            <span className="font-semibold">TODA LA SEMANA</span>
          </div>
          <h2 className="text-xl font-bold">GYM GRATIS</h2>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Remedios Gratis - 10 de Mayo</DialogTitle>
            <DialogDescription>
              Información detallada sobre el evento de remedios gratis en la
              Municipalidad.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Detalles del Evento:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fecha: 10 de Mayo, 2024</li>
              <li>Hora: 9:00 AM - 5:00 PM</li>
              <li>Lugar: Plaza Central de la Municipalidad</li>
              <li>
                Requisitos: Presentar documento de identidad y tarjeta de salud
              </li>
            </ul>
            <p className="mt-4">
              Se ofrecerán medicamentos básicos de forma gratuita a los
              residentes de la comunidad. Por favor, traiga su receta médica si
              necesita medicamentos específicos.
            </p>
          </div>
          <Button onClick={() => setIsModalOpen(false)} className="mt-4">
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
