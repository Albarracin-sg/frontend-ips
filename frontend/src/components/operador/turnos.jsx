import React, { useState, useEffect } from "react";
import NewTurn from "./newForm";
import {
  obtenerRespuesta,
  guardarRespuesta,
} from "../../services/localStorage/respuestaStorage";

const TurnoOp = ({ setComponenteActual }) => {
  // State for patients, pagination and screen size
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage, setPatientsPerPage] = useState(5);

  // Effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const { innerHeight } = window;
      // Adjust patients per page based on screen height
      if (innerHeight <= 622) {
        setPatientsPerPage(5);
      } else if (innerHeight <= 768) {
        setPatientsPerPage(7);
      } else if (innerHeight <= 900) {
        setPatientsPerPage(8);
      } else {
        setPatientsPerPage(10);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para cargar y actualizar la lista de turnos
  const loadTurnos = () => {
    // Obtener datos guardados del localStorage
    const datosGuardados = obtenerRespuesta();
    if (datosGuardados && Array.isArray(datosGuardados) && datosGuardados.length > 0) {
        // Filtrar solo los turnos que tienen nombre y número de turno
        const turnosValidos = datosGuardados.filter(patient => 
            patient.Turno && (patient.PrimerNombre || patient.PrimerApellido)
        );
        // Ordenar los turnos numéricamente
        const sortedPatients = turnosValidos.sort((a, b) => {
            // Extraer solo los números del turno, ignorando letras
            const numA = parseInt(a.Turno?.replace(/\D/g, '') || '0');
            const numB = parseInt(b.Turno?.replace(/\D/g, '') || '0');
            return numA - numB;
        });
        // Actualizar el estado y guardar en localStorage
        setPatients(sortedPatients);
        guardarRespuesta(sortedPatients);
        // Guardar el turno actual separadamente
        if (sortedPatients.length > 0) {
            localStorage.setItem('currentTurn', JSON.stringify(sortedPatients[0]));
        }
    } else {
        // Si no hay datos, reiniciar estados
        setPatients([]);
        localStorage.removeItem('currentTurn');
    }
  };

  // Effect to load patients
  useEffect(() => {
    loadTurnos();
  }, []);

  // Calculate pagination
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < Math.ceil(patients.length / patientsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para manejar el siguiente turno
  const handleSiguienteTurno = () => {
    if (patients.length > 0) {
      const siguientePaciente = patients[0];
      const updatedPatients = patients.slice(1);
  
      // Actualizar el turno actual en localStorage
      localStorage.setItem("currentTurn", JSON.stringify(siguientePaciente));
  
      // Guardar el paciente en la lista de pacientes atendidos
      const pacientesAtendidos = JSON.parse(localStorage.getItem("pacientesAtendidos") || "[]");
      pacientesAtendidos.unshift(siguientePaciente); // Agregar al inicio de la lista
      localStorage.setItem("pacientesAtendidos", JSON.stringify(pacientesAtendidos));
  
      setPatients(updatedPatients);
      
      // Guardar directamente la lista actualizada de pacientes en espera
      localStorage.setItem('respuestaAPI', JSON.stringify(updatedPatients));
  
      // Disparar evento para actualizar otras pantallas
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#c3d9fa] p-2 sm:p-4 md:p-6">  
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
          <header className="p-3 sm:p-4 md:p-5 bg-blue-500 text-white">
            <h2 className="text-xl sm:text-2xl font-bold">Gestión de Turnos</h2>
            <p className="text-xs sm:text-sm opacity-80">
              Sistema de administración de cola de espera
            </p>
          </header>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-blue-50 text-blue-500">
                  <th
                    scope="col"
                    className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-medium rounded-tl-lg"
                  >
                    <span className="flex items-center">
                      <span className="mr-1 sm:mr-2">#</span>
                      <span className="hidden xs:inline">Turnos en Cola</span>
                      <span className="inline xs:hidden">Turnos</span>
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-medium"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-medium"
                  >
                    Turno
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-medium rounded-tr-lg"
                  >
                    Módulo
                  </th>
                </tr>
              </thead>
              {/* Cuerpo de la tabla */}
              <tbody>
                {/* Mapeo de pacientes */}
                {currentPatients.map((patient, index) => (
                    <tr
                        key={patient.id || index}
                        className={`
                        border-b border-gray-100 hover:bg-blue-50 transition-colors
                        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        ${index === 0 ? 'bg-blue-100 hover:bg-blue-100' : ''}`}
                    >
                        {/* Número de orden */}
                        <th scope="row" className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-medium whitespace-nowrap">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full">
                                {index + 1}
                            </span>
                        </th>
                        {/* Nombre del paciente */}
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-medium truncate max-w-[140px] sm:max-w-[200px] md:max-w-none">
                            {`${patient.PrimerNombre || ''} ${patient.PrimerApellido || ''}`.trim()}
                        </td>
                        {/* Número de turno */}
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
                            <span className={`inline-flex items-center rounded-full bg-blue-100 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium text-blue-800`}>
                                {patient.Turno || "--"}
                            </span>
                        </td>
                        {/* Módulo asignado */}
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
                            <span
                                className={`inline-flex items-center rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium
                                ${patient.modulo === 'No Prioritario'
                                        ? 'bg-blue-100 text-blue-800'
                                        : patient.modulo === 'Prioritario'
                                            ? 'bg-red-100 text-red-800'
                                            : ''
                                    }
                            `}
                            >
                                {patient.module || "--"}
                            </span>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className="p-3 sm:p-4 md:p-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-xs sm:text-sm text-gray-500 w-full sm:w-auto text-center sm:text-left">
              Mostrando {currentPatients.length} de {patients.length} turnos
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`
                                    flex items-center justify-center cursor-pointer gap-2 py-2 sm:py-2.5 px-3 sm:px-4 
                                    rounded transition-colors font-medium shadow-sm w-full sm:w-auto
                                    ${
                                      currentPage === 1
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-blue-500 hover:bg-blue-700 text-white"
                                    }
                                `}
              >
                Anterior
              </button>
              <span className="text-sm text-gray-600">
                Página {currentPage} de{" "}
                {Math.ceil(patients.length / patientsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(patients.length / patientsPerPage)
                }
                className={`
                                    flex items-center justify-center cursor-pointer gap-2 py-2 sm:py-2.5 px-3 sm:px-4 
                                    rounded transition-colors font-medium shadow-sm w-full sm:w-auto
                                    ${
                                      currentPage ===
                                      Math.ceil(
                                        patients.length / patientsPerPage
                                      )
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-blue-500 hover:bg-blue-700 text-white"
                                    }
                                `}
              >
                Siguiente
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSiguienteTurno}
                disabled={patients.length === 0}
                className={`
                  flex items-center justify-center cursor-pointer gap-2 py-2 sm:py-2.5 px-3 sm:px-4 
                  rounded transition-colors font-medium shadow-sm w-full sm:w-auto
                  ${
                    patients.length === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-700 text-white"
                  }
                `}
              >
                Siguiente Turno
              </button>
              <button
                onClick={() => setComponenteActual(<NewTurn />)}
                className="flex items-center justify-center cursor-pointer gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded bg-blue-500 hover:bg-blue-700 text-white transition-colors font-medium shadow-sm w-full sm:w-auto"
              >
                Nuevo Turno
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TurnoOp;
