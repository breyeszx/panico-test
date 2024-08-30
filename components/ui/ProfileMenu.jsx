import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { IoCall } from "react-icons/io5";

export default function PerfilMenu() {
  const contacts = [
    { name: "Mark", relation: "Hijo", number: "123-456-7890" },
    { name: "Jacob", relation: "Hermano", number: "098-765-4321" },
  ];

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-lime-200 to-emerald-300 p-4 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start mb-6">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img
            src="/placeholder.svg?height=300&width=300"
            className="mx-auto rounded-full"
            alt="User avatar"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-2">
          <Input type="text" placeholder="Rut" />
          <Input type="text" placeholder="Nombres" />
          <Input type="text" placeholder="Apellido paterno" />
          <Input type="text" placeholder="Apellido materno" />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Contactos de Emergencia</h2>
        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.relation}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="icon" variant="outline">
                      <IoCall className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="sm">
                      Eliminar
                    </Button>
                    <Button
                      className="bg-yellow-400"
                      variant="warning"
                      size="sm"
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

      <div className="flex justify-center mb-6">
        <Button>AGREGAR CUIDADOR</Button>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-xl font-bold mb-2">RANGOS</h2>
        <div className="mb-2">Nivel de prestigio 1</div>
        <Progress value={33} className="w-full" />
      </div>
    </div>
  );
}
