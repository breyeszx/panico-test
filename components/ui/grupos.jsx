"use client";
import React, { useState } from "react";
import { FaChess } from "react-icons/fa";

export default function Grupos() {
  const games = [
    { name: "AJEDREZ", icon: <FaChess /> },
    { name: "BINGO", icon: <FaChess /> },
    { name: "LOL", icon: <FaChess /> },
    { name: "CANDY CRUSH", icon: <FaChess /> },
    { name: "POOL", icon: <FaChess /> },
    { name: "CARTAS", icon: <FaChess /> },
  ];
  const [openModal, setOpenModal] = useState(null);

  const handleJoin = (gameName) => {
    console.log(`Unido a ${gameName}`);
    setOpenModal(null);
  };

  return (
    <div className=" flex flex-col space-y-4 p-4 bg-gradient-to-br from-teal-400 to-green-400 min-h-screen">
      {games.map((game) => (
        <div key={game.name} className="bg-sky-100 rounded-lg shadow-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              {game.icon}
              <span className="text-lg font-bold">{game.name}</span>
            </div>
            <button
              onClick={() => setOpenModal(game.name)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded"
            >
              UNIRME
            </button>
          </div>
        </div>
      ))}

      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Confirmar acción</h2>
            <p className="mb-4">
              ¿Estás seguro de que quieres unirte a {openModal}?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => setOpenModal(null)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => handleJoin(openModal)}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
