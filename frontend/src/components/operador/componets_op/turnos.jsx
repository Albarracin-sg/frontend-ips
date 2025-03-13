import React from "react";
import NewTurn from "./newForm";

const TurnoOp = ({ setComponenteActual }) => {
  return (
    //contenedor de fondo
    <div className="w-full h-screen flex flex-col bg-[#c3d9fa]">
      {/* Contenedor para centrar */}
      <div className="flex-1 flex items-center justify-center p-4">
        {/*targeta blanca donde esta la tabla*/}
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Encabezado azul */}
          <header className="p-5 bg-blue-500 text-white">
            <h2 className="text-2xl font-bold">Gestión de Turnos</h2>
            <p className="text-sm opacity-80">Sistema de administración de cola de espera</p>
          </header>
          {/* Tabla de turnos */}
          <content className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-50 text-blue-500">
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
                {/* Creación de array de objetos que representará la lista de turnos en cola */}
                {[
                  //Cada objeto dentro del array representa un turno individual y tiene estos datos (id,nombre,turno,modulo)
                  { id: 1, nombre: "Juan Pablo Ramírez Mora", turno: "G129", modulo: "Prioritario" },
                  { id: 2, nombre: "Javier Alexander Gómez Delgado", turno: "N223", modulo: "No Prioritario" },
                  { id: 3, nombre: "Ramiro Felipe Troches Martínez", turno: "N554", modulo: "Prioritario" },
                  { id: 4, nombre: "Juan Pablo Ramírez Mora", turno: "G129", modulo: "Prioritario" },
                  { id: 5, nombre: "Javier Alexander Gómez Delgado", turno: "N223", modulo: "No Prioritario" },
                  { id: 6, nombre: "Ramiro Felipe Troches Martínez", turno: "N554", modulo: "Prioritario" },
                  { id: 7, nombre: "Juan Pablo Ramírez Mora", turno: "G129", modulo: "Prioritario" },
                  { id: 8, nombre: "Ramiro Felipe Troches Martínez", turno: "N554", modulo: "No Prioritario" },
                  { id: 9, nombre: "Juan Pablo Ramírez Mora", turno: "G129", modulo: "Prioritario" },
                  { id: 10, nombre: "Javier Alexander Gómez Delgado", turno: "N223", modulo: "No Prioritario" }                  
                ].map((paciente, index) => (
                  /*en la funcion map a cada objeto se asigna una variable paciente y como es un objeto se puede acceder usando paciente.id etc
                  y el index especifica el posicionamiento del array, por lo que (paciente.nombre con index==0 = Juan Pablo Ramirez Mora)*/
                  
                  <tr key={paciente.id} //generador de filas del tamaño del objeto dentro del array
                    className={`
                      border-b border-gray-100 hover:bg-blue-50 transition-colors
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      ${index === 0 ? 'bg-blue-100 hover:bg-blue-100' : ''}
                    `}
                    // si el index del array es par, data un color mas claro de ser impar sera oscuro
                  >
                    {/* COLUMNA PARA EL ID */}
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full`}>
                        {paciente.id}{/*Se muetra el id del paciente del index acutal y asi sucecivamente :v*/}
                      </span>
                    </th>

                    {/* COLUMNA PARA EL NOMRBE */}
                    <td className="px-6 py-4 font-medium">
                      {paciente.nombre}
                    </td>

                    {/* COLUMNA PARA EL TURNO */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-800">
                        {paciente.turno}
                      </span>
                    </td>

                    {/* COLUMNA PARA EL MODULO */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium
                        ${paciente.modulo === "No Prioritario" ? "bg-blue-100 text-blue-800" : 
                          paciente.modulo === "Prioritario" ? "bg-red-100 text-red-800" : 
                          ""}
                      `}>
                        {paciente.modulo}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </content>
          
          <footer className="p-5 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Mostrando 10 de 10 turnos
            </div>
            <button
              onClick={() => setComponenteActual(<NewTurn />)}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white transition-colors font-medium shadow-sm"
            >              
              Nuevo Turno
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TurnoOp;