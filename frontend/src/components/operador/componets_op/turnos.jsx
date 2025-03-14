import React from "react";
import { useState, useEffect } from "react";
import NewTurn from "./newForm";
import axios from 'axios';

const TurnoOp = ({ setComponenteActual }) => {
  //declaracion de los turnos de los pacientes con un array vacio
  const [turnos,setTurnos] = useState([])

  useEffect(()=>{
    //Funcion asincrona que hace la peticion de los turnos
    const obtenerTurnos = async () =>{
      try {
        const response = await axios.get('http://localhost:3000/api/turnos');
        //La respuesta del back lo implementa en turnos mediante setTurnos por lo que turnos quedaria con todo el array de objetos que tenga el back
        setTurnos(response.data);
      } catch (error) {
        console.error("Error al obtener los turnos:", error);
      }
    }
    //se llama la funcion
    obtenerTurnos();
  },[])

  return (
    // Contenedor principal
    <div className="w-full h-screen flex flex-col bg-[#c3d9fa]">
      {/* Contenedor para centrar el contenido */}
      <div className="flex-1 flex items-center justify-center p-2 2xl:p-4">
        {/* Tarjeta blanca principal */}
        <div className="w-full max-w-4xl 2xl:max-w-6xl bg-white rounded-md 2xl:rounded-lg shadow-md 2xl:shadow-lg overflow-hidden">
          {/* Encabezado azul */}
          <header className="p-3 2xl:p-5 bg-blue-500 text-white">
            <h2 className="text-xl 2xl:text-2xl font-bold">Gestión de Turnos</h2>
            <p className="text-xs 2xl:text-sm opacity-80">Sistema de administración de cola de espera</p>
          </header>

          {/* Contenedor de la tabla con scroll horizontal */}
          <content className="overflow-x-auto">
            <table className="w-full text-xs 2xl:text-sm">
              {/* Encabezados de la tabla */}
              <thead>
                <tr className="bg-blue-50 text-blue-500">
                  <th scope="col" className="px-4 py-3 2xl:px-6 2xl:py-4 text-left font-medium rounded-tl-md 2xl:rounded-tl-lg">
                    <span className="flex items-center">
                      <span className="mr-1 2xl:mr-2">#</span>
                      Turnos en Cola
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-3 2xl:px-6 2xl:py-4 text-left font-medium">Nombre</th>
                  <th scope="col" className="px-4 py-3 2xl:px-6 2xl:py-4 text-left font-medium">Turno</th>
                  <th scope="col" className="px-4 py-3 2xl:px-6 2xl:py-4 text-left font-medium rounded-tr-md 2xl:rounded-tr-lg">Módulo</th>
                </tr>
              </thead>

              {/* Cuerpo de la tabla */}
              <tbody>
                {turnos.map((paciente, index) => (
                  <tr key={paciente.id}
                    className={`
                      border-b border-gray-100 hover:bg-blue-50 transition-colors
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      ${index === 0 ? 'bg-blue-100 hover:bg-blue-100' : ''}
                    `}
                  >
                    {/* Columna ID */}
                    <th scope="row" className="px-4 py-3 2xl:px-6 2xl:py-4 font-medium whitespace-nowrap">
                      <span className="inline-flex items-center justify-center w-5 h-5 2xl:w-6 2xl:h-6 rounded-full">
                        {paciente.id}
                      </span>
                    </th>

                    {/* Columna Nombre */}
                    <td className="px-4 py-3 2xl:px-6 2xl:py-4 font-medium">
                      {paciente.nombre}
                    </td>

                    {/* Columna Turno */}
                    <td className="px-4 py-3 2xl:px-6 2xl:py-4">
                      <span className="inline-flex items-center rounded-full bg-sky-100 px-2 py-0.5 2xl:px-2.5 2xl:py-1 text-[10px] 2xl:text-xs font-medium text-sky-800">
                        {paciente.turno}
                      </span>
                    </td>

                    {/* Columna Módulo */}
                    <td className="px-4 py-3 2xl:px-6 2xl:py-4">
                      <span className={`inline-flex items-center rounded-md px-1.5 py-0.5 2xl:px-2 2xl:py-1 text-[10px] 2xl:text-xs font-medium
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
          
          {/* Pie de la tabla */}
          <footer className="p-3 2xl:p-5 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            {/* Contador de turnos */}
            <div className="text-xs 2xl:text-sm text-gray-500">
              Mostrando {turnos.length} de {turnos.length} turnos
            </div>
            {/* Botón de nuevo turno */}
            <button
              onClick={() => setComponenteActual(<NewTurn />)}
              className="flex items-center justify-center gap-1 2xl:gap-2 py-2 px-3 2xl:py-2.5 2xl:px-4 rounded bg-blue-500 hover:bg-blue-700 text-white transition-colors font-medium shadow-sm text-xs 2xl:text-sm"
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