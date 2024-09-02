import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center flex-wrap gap-2 p-2 bg-gradient-to-r from-lime-200 via-teal-200 to-teal-300 w-full">
      <Link href={"/grupos"}>
        <Button
          variant="disabled"
          className="bg-white text-black font-bold rounded-full px-6"
        >
          GRUPOS
        </Button>
      </Link>

      <Link href={"/eventos"}>
        <Button
          variant="disabled"
          className="bg-white text-black font-bold rounded-full px-6"
        >
          EVENTOS
        </Button>
      </Link>
      <Link href={"/perfil"}>
        <Button
          variant="outline"
          className="bg-white text-black font-bold rounded-full px-6"
        >
          PERFIL
        </Button>
      </Link>

      <Link href={"/panico"}>
        <Button
          variant="outline"
          className="bg-red-500 text-white rounded-full p-2"
        >
          <AlertTriangle className="h-6 w-6" />
          <span className="sr-only">Alert</span>
        </Button>
      </Link>
    </nav>
  );
}
