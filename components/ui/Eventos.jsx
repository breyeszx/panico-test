"use client";
import { useState } from "react";
import {
  Building2,
  Dumbbell,
  X,
  Music,
  TreeDeciduous,
  Library,
} from "lucide-react";
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
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      icon: Building2,
      title: "MUNICIPALIDAD",
      date: "10 MAYO",
      name: "REMEDIOS GRATIS",
      description:
        "Información detallada sobre el evento de remedios gratis en la Municipalidad.",
      details: {
        date: "10 de Mayo, 2024",
        time: "9:00 AM - 5:00 PM",
        place: "Plaza Central de la Municipalidad",
        requirements: "Presentar documento de identidad y tarjeta de salud",
        extraInfo:
          "Se ofrecerán medicamentos básicos de forma gratuita a los residentes de la comunidad. Por favor, traiga su receta médica si necesita medicamentos específicos.",
      },
    },
    {
      id: 2,
      icon: Dumbbell,
      title: "TODA LA SEMANA",
      date: "",
      name: "GYM GRATIS",
      description:
        "Gimnasio gratuito disponible durante toda la semana en el centro comunitario.",
      details: {
        date: "Toda la Semana",
        time: "6:00 AM - 10:00 PM",
        place: "Centro Comunitario",
        requirements:
          "Solo para residentes locales, traer toalla y botella de agua.",
        extraInfo:
          "Disfruta de las instalaciones modernas y entrenadores disponibles para ayudar con rutinas personalizadas.",
      },
    },
    {
      id: 3,
      icon: Music,
      title: "CONCIERTO",
      date: "15 MAYO",
      name: "MÚSICA EN EL PARQUE",
      description:
        "Concierto al aire libre con bandas locales en el Parque Central.",
      details: {
        date: "15 de Mayo, 2024",
        time: "7:00 PM - 10:00 PM",
        place: "Parque Central",
        requirements: "Traer manta o silla para sentarse.",
        extraInfo:
          "Participa en un evento lleno de buena música y ambiente familiar.",
      },
    },
    {
      id: 4,
      icon: TreeDeciduous,
      title: "DÍA DEL MEDIO AMBIENTE",
      date: "5 JUNIO",
      name: "PLANTACIÓN DE ÁRBOLES",
      description:
        "Evento de plantación de árboles para celebrar el Día del Medio Ambiente.",
      details: {
        date: "5 de Junio, 2024",
        time: "8:00 AM - 12:00 PM",
        place: "Parque Ecológico",
        requirements: "Llevar ropa cómoda y protector solar.",
        extraInfo:
          "Ayuda a mejorar nuestro medio ambiente plantando árboles en áreas designadas.",
      },
    },
    {
      id: 5,
      icon: Library,
      title: "BIBLIOTECA COMUNITARIA",
      date: "20 JUNIO",
      name: "TALLER DE LECTURA",
      description: "Taller de lectura para niños en la biblioteca comunitaria.",
      details: {
        date: "20 de Junio, 2024",
        time: "10:00 AM - 12:00 PM",
        place: "Biblioteca Comunitaria",
        requirements: "Inscripción previa requerida.",
        extraInfo:
          "Fomenta la lectura en los más pequeños con actividades divertidas y educativas.",
      },
    },
    {
      id: 6,
      icon: Building2,
      title: "MUNICIPALIDAD",
      date: "25 JUNIO",
      name: "CLASES DE COCINA SALUDABLE",
      description:
        "Aprende a cocinar platos saludables con ingredientes locales.",
      details: {
        date: "25 de Junio, 2024",
        time: "2:00 PM - 5:00 PM",
        place: "Centro de Eventos de la Municipalidad",
        requirements: "Registro previo obligatorio.",
        extraInfo:
          "Mejora tu alimentación aprendiendo nuevas recetas con chefs profesionales.",
      },
    },
  ];

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-teal-400 to-green-400 p-6  shadow-lg">
      <Button className="text-2xl font-bold text-purple-800 bg-purple-200 rounded-full py-2 px-4 mb-6 inline-block">
        Eventos Cercanos
      </Button>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center mb-2">
              <event.icon className="w-6 h-6 mr-2 text-gray-600" />
              <span className="font-semibold">{event.title}</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              {event.date} {event.name}
            </h2>
            <Button
              onClick={() => openModal(event)}
              className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-semibold py-1 px-3 rounded-full text-sm"
            >
              MAS INFORMACIÓN
            </Button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {selectedEvent.name} - {selectedEvent.date}
              </DialogTitle>
              <DialogDescription>{selectedEvent.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Detalles del Evento:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fecha: {selectedEvent.details.date}</li>
                <li>Hora: {selectedEvent.details.time}</li>
                <li>Lugar: {selectedEvent.details.place}</li>
                <li>Requisitos: {selectedEvent.details.requirements}</li>
              </ul>
              <p className="mt-4">{selectedEvent.details.extraInfo}</p>
            </div>
            <Button onClick={() => setIsModalOpen(false)} className="mt-4">
              Cerrar
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
