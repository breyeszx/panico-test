import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { IoCall } from "react-icons/io5";

export default function PerfilMenu() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-lime-200 to-emerald-300 p-6 rounded-lg shadow-lg container mx-auto px-4">
      <div className="flex flex md:flex-center my-4 gap-4 items-center md:items-start">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img
            src="https://via.placeholder.com/300"
            className="mx-auto"
            alt="User avatar"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-2 my-10">
          <Input type="text" placeholder="Rut" />
          <Input type="text" placeholder="Nombres" />
          <Input type="text" placeholder="Apellido paterno" />
          <Input type="text" placeholder="Apellido materno" />
        </div>
      </div>
      <div className="my-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Parentezco</TableHead>
              <TableHead>Numero emergencia</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Mark</TableCell>
              <TableCell>Hijo</TableCell>
              <TableCell>
                <IoCall />
              </TableCell>
              <TableCell>
                <div className="space-x-3">
                  <Button className="m-3 my-3" variant="destructive" size="sm">
                    ELIMINAR
                  </Button>
                  <Button className="bg-yellow-400" variant="warning" size="sm">
                    MODIFICAR
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jacob</TableCell>
              <TableCell>Hermano</TableCell>
              <TableCell>
                <IoCall />
              </TableCell>
              <TableCell>
                <div className="space-x-3">
                  <Button className="m-3 my-3" variant="destructive" size="sm">
                    ELIMINAR
                  </Button>
                  <Button className="bg-yellow-400" variant="warning" size="sm">
                    MODIFICAR
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center">
        <Button className="mt-4">AGREGAR CUIDADOR</Button>
      </div>
      <h2 className="text-center text-1xl font-bold my-4">RANGOS</h2>
      <div className="my-4">
        <div className="text-center mb-2">Nivel de prestigio 1</div>
      </div>
      <div className="my-4">
        <Progress value={33} className="w-full" />
      </div>
    </div>
  );
}
