import React, { useState } from "react";
import Ipslogo from "./../../../assets/ips.png"; // Ruta corregida
import InicioOp from "./Inicio";
import TurnoOp from "./Turnos";

const BarraLateral = () => {
  const [componenteActual, setComponenteActual] = useState(<InicioOp />);

  return (
    <div className="flex ">
      {/* Barra lateral responsiva */}
      <aside className="w-64 sm:w-52 h-screen bg-gray-800 text-white flex flex-col p-4">
        {/* Logo */}
        <div className="p-4 text-center">
          <img src={Ipslogo} alt="IPS Logo" className="w-28 sm:w-24 mx-auto" />
        </div>

        {/* Navegación */}
        <nav className="flex-1 space-y-2">
          <a
            href="#"
            onClick={() => setComponenteActual(<InicioOp />)}
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Inicio
          </a>
          <a
            href="#"
            onClick={() => setComponenteActual(<TurnoOp />)}
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Turnos
          </a>
        </nav>

        {/* Botón "Nuevo Turno" abajo */}
        <button className="mt-auto py-3 px-6 w-full bg-blue-500 hover:bg-blue-700 text-white rounded transition-colors">
          Nuevo Turno
        </button>
      </aside>

      {/* Contenido principal dinámico */}
      <main className="">{componenteActual}</main>
    </div>
  );
};

export default BarraLateral;
