import React from "react"; // Importa la librería de React
import ipsLogo from "../../../assets/ips.png"; // Importa la imagen del logo de IPS
// Define el componente funcional BarraLateral
const BarraLateral = () => {
  return (
    // Contenedor principal que usa flexbox para el diseño
    <div className="flex">
      {/* Barra lateral */}
      <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        {/* Contenedor del logo */}
        <div className="p-4">
          <img src={ipsLogo} alt="IPS Logo" className="w-32 h-15 mx-auto" />
        </div>

        {/* Navegación */}
        <nav className="flex-1 px-4 space-y-2">
          {/* Enlace a Inicio */}
          <a className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
            Inicio
          </a>
          {/* Enlace a Turnos */}
          <a
            href="#"
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
          >
            Turnos
          </a>
          {/* Botón para Nuevo Turno */}
          <button
            href="#"
            className="block py-2 px-10 rounded bg-blue-500 hover:bg-blue-900 transition-colors cursor-pointer relative top-115 mx-auto"
          >
            Nuevo Turno
          </button>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <h1>ajskasiodb</h1>
      </main>
    </div>
  );
};
// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default BarraLateral;
