import React from "react";
import NewTurn from "./newForm";

const TurnoOp = ({ setComponenteActual }) => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-5 bg-blue-600 text-white">
            <h2 className="text-2xl font-bold">Gestión de Turnos</h2>
            <p className="text-sm opacity-80">Sistema de administración de cola de espera</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-50 text-blue-700">
                  <th scope="col" className="px-6 py-4 text-left font-medium rounded-tl-lg">
                    <span className="flex items-center">
                      <span className="mr-2">#</span>
                      Turnos en Cola
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-4 text-left font-medium">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-4 text-left font-medium">
                    Turno
                  </th>
                  <th scope="col" className="px-6 py-4 text-left font-medium rounded-tr-lg">
                    Módulo
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, nombre: "Juan Pablo Ramírez Mora", turno: "G129", modulo: "Pediatría" },
                  { id: 2, nombre: "Javier Alexander Gómez Delgado", turno: "N223", modulo: "Otorrinolaringólogo" },
                  { id: 3, nombre: "Ramiro Felipe Troches Martínez", turno: "N554", modulo: "Nutriología" },
                  { id: 4, nombre: "Juan Pablo Ramírez Mora", turno: "G129", modulo: "Pediatría" },
                  { id: 5, nombre: "Javier Alexander Gómez Delgado", turno: "N223", modulo: "Otorrinolaringólogo" },
                  { id: 6, nombre: "Ramiro Felipe Troches Martínez", turno: "N554", modulo: "Nutriología" },
                  { id: 7, nombre: "Juan Pablo Ramírez Mora", turno: "G129", modulo: "Pediatría" },
                  { id: 8, nombre: "Ramiro Felipe Troches Martínez", turno: "N554", modulo: "Nutriología" },
                  { id: 9, nombre: "Juan Pablo Ramírez Mora", turno: "G129", modulo: "Pediatría" },
                  { id: 10, nombre: "Javier Alexander Gómez Delgado", turno: "N223", modulo: "Otorrinolaringólogo" }
                ].map((paciente, index) => (
                  <tr 
                    key={paciente.id}
                    className={`
                      border-b border-gray-100 hover:bg-blue-50 transition-colors
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      ${index === 0 ? 'bg-blue-100 hover:bg-blue-100' : ''}
                    `}
                  >
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${index === 0 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {paciente.id}
                      </span>
                    </th>
                    <td className="px-6 py-4 font-medium">
                      {paciente.nombre}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                        {paciente.turno}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium
                        ${paciente.modulo === "Pediatría" ? "bg-purple-100 text-purple-800" : 
                          paciente.modulo === "Otorrinolaringólogo" ? "bg-amber-100 text-amber-800" : 
                          "bg-emerald-100 text-emerald-800"}
                      `}>
                        {paciente.modulo}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Mostrando 10 de 10 turnos
            </div>
            <button
              onClick={() => setComponenteActual(<NewTurn />)}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors font-medium shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Nuevo Turno
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnoOp;