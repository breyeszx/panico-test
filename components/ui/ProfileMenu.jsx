"use client";
import { useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";
import { IoLogOut } from "react-icons/io5";

export default function Perfilmenu() {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    relation: "",
    number: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    contactId: null,
  });
  const router = useRouter();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const response = await fetch("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      router.push("/login");
    }
  };

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAddContact = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const updatedContacts = isEditing
      ? user.emergencyContacts.map((contact) =>
          contact.id === newContact.id ? newContact : contact
        )
      : [...user.emergencyContacts, { ...newContact, id: Date.now() }];

    try {
      const response = await fetch("/api/emergency-contacts", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ emergencyContacts: updatedContacts }),
      });

      if (!response.ok) {
        throw new Error("Failed to update emergency contacts");
      }

      setUser({ ...user, emergencyContacts: updatedContacts });
      setIsModalOpen(false);
      setNewContact({ name: "", relation: "", number: "" });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating emergency contacts:", error);
    }
  };

  const handleEditContact = (contact) => {
    setNewContact(contact);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteContact = (contactId) => {
    setDeleteConfirmation({ isOpen: true, contactId });
  };

  const confirmDelete = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const updatedContacts = user.emergencyContacts.filter(
      (contact) => contact.id !== deleteConfirmation.contactId
    );

    try {
      const response = await fetch("/api/emergency-contacts", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ emergencyContacts: updatedContacts }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete emergency contact");
      }

      setUser({ ...user, emergencyContacts: updatedContacts });
      setDeleteConfirmation({ isOpen: false, contactId: null });
    } catch (error) {
      console.error("Error deleting emergency contact:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="w-full bg-gradient-to-br from-teal-400 to-green-400 p-4 sm:p-6 lg:p-8 shadow-lg">
      {user && (
        <>
          <div key={user.id} className="flex flex-row gap-4 mb-8">
            <div className="w-1/3 flex-shrink-0 pt-12">
              <img
                src="https://via.placeholder.com/400x400"
                className="w-full h-auto rounded-full max-w-[120px] mx-auto"
                alt="User avatar"
              />
            </div>
            <div className="w-2/3 space-y-2">
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </Label>
              <Input
                id="name"
                type="text"
                value={user.name || ""}
                placeholder="Nombres"
                className="w-full"
                readOnly
              />
              <Label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Apellido
              </Label>
              <Input
                id="lastName"
                type="text"
                value={user.lastName || ""}
                placeholder="Apellido paterno"
                className="w-full"
                readOnly
              />
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="text"
                value={user.email || ""}
                placeholder="Email"
                className="w-full"
                readOnly
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Contactos de Emergencia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {user.emergencyContacts.map((contact) => (
                <Card key={contact.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-semibold">{contact.name}</p>
                        <p className="text-sm text-gray-600">
                          {contact.relation}
                        </p>
                        <p className="text-sm text-gray-600">
                          {contact.number}
                        </p>
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
                    setNewContact({
                      id: 0,
                      name: "",
                      relation: "",
                      number: "",
                    });
                    setIsEditing(false);
                  }}
                >
                  AGREGAR CUIDADOR
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>
                    {isEditing
                      ? "Modificar Cuidador"
                      : "Agregar Nuevo Cuidador"}
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
                  ¿Estás seguro de que deseas eliminar este contacto? Esta
                  acción no se puede deshacer.
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
          <div className="mt-8 text-center flex justify-center">
            <Button
              variant="destructive"
              size="lg"
              onClick={handleLogout}
              className="w-full sm:w-auto px-8 py-3 text-lg flex items-center justify-center"
            >
              <IoLogOut className="mr-2 h-5 w-5" />
              CERRAR SESION
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
