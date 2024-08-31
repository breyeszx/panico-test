"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Phone, X } from "lucide-react";
import { IoIosCall } from "react-icons/io";

export default function Perfilmenu() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Mark", relation: "Hijo", number: "123-456-7890" },
    { id: 2, name: "Jacob", relation: "Hermano", number: "098-765-4321" },
    { id: 3, name: "Emma", relation: "Hija", number: "555-123-4567" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContact, setNewContact] = useState({
    id: 0,
    name: "",
    relation: "",
    number: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    contactId: null,
  });

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.relation && newContact.number) {
      if (isEditing) {
        setContacts(
          contacts.map((c) => (c.id === newContact.id ? newContact : c))
        );
      } else {
        setContacts([...contacts, { ...newContact, id: Date.now() }]);
      }
      setNewContact({ id: 0, name: "", relation: "", number: "" });
      setIsModalOpen(false);
      setIsEditing(false);
    }
  };

  const handleDeleteContact = (id) => {
    setDeleteConfirmation({ isOpen: true, contactId: id });
  };

  const confirmDelete = () => {
    if (deleteConfirmation.contactId) {
      setContacts(
        contacts.filter((c) => c.id !== deleteConfirmation.contactId)
      );
      setDeleteConfirmation({ isOpen: false, contactId: null });
    }
  };

  const handleEditContact = (contact) => {
    setNewContact(contact);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-gradient-to-br from-teal-400 to-green-400 p-4 sm:p-6 lg:p-8 shadow-lg">
      <div className="flex flex-row gap-4 mb-8">
        <div className="w-1/3 flex-shrink-0 pt-2">
          <img
            src="https://via.placeholder.com/300x300"
            className="w-full h-auto rounded-full max-w-[120px] mx-auto"
            alt="User avatar"
          />
        </div>
        <div className="w-2/3 space-y-2">
          <Input type="text" placeholder="Rut" className="w-full" />
          <Input type="text" placeholder="Nombres" className="w-full" />
          <Input
            type="text"
            placeholder="Apellido paterno"
            className="w-full"
          />
          {/*           <Input
            type="text"
            placeholder="Apellido materno"
            className="w-full"
          /> */}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Contactos de Emergencia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <Card key={contact.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.relation}</p>
                    <p className="text-sm text-gray-600">{contact.number}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Button size="icon" variant="outline">
                      <IoIosCall className="w-8 h-8" />
                      <span className="sr-only">Call {contact.name}</span>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="w-full"
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      Eliminar
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full bg-yellow-300"
                      onClick={() => handleEditContact(contact)}
                    >
                      Modificar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button
              className="w-full sm:w-auto px-4 sm:px-8 py-2 text-base sm:text-lg"
              onClick={() => {
                setNewContact({ id: 0, name: "", relation: "", number: "" });
                setIsEditing(false);
              }}
            >
              AGREGAR CUIDADOR
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {isEditing ? "Modificar Cuidador" : "Agregar Nuevo Cuidador"}
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nombre
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={newContact.name}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="relation" className="text-right">
                  Relación
                </Label>
                <Input
                  id="relation"
                  name="relation"
                  value={newContact.relation}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Número
                </Label>
                <Input
                  id="number"
                  name="number"
                  value={newContact.number}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleAddContact}>
                {isEditing ? "Guardar Cambios" : "Agregar Contacto"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="text-center mb-4 max-w-md mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">RANGOS</h2>
        <div className="mb-2">Nivel de prestigio 1</div>
        <Progress value={33} className="w-full" />
      </div>

      <Dialog
        open={deleteConfirmation.isOpen}
        onOpenChange={(isOpen) =>
          setDeleteConfirmation({ ...deleteConfirmation, isOpen })
        }
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Eliminación</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas eliminar este contacto? Esta acción no
              se puede deshacer.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() =>
                setDeleteConfirmation({ isOpen: false, contactId: null })
              }
            >
              Cancelar
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
