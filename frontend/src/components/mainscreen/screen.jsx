import { useState, useEffect } from "react";
import { obtenerRespuesta } from '../../services/localStorage/respuestaStorage'
import ipsLogo from "../../assets/ipsBlack.png";

const Screen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [patients, setPatients] = useState([]);
  const [currentPatient, setCurrentPatient] = useState({
    name: "Sin paciente",
    turn: "---",
    module: "--"
  });
  useEffect(() => {
    const datosGuardados = obtenerRespuesta()
    if (datosGuardados) {
      // Convertir el objeto a un array con un solo elemento
      setPatients([datosGuardados]);
      
      // Actualizar también el paciente actual
      setCurrentPatient({
        name: datosGuardados.PrimerNombre + ' ' + datosGuardados.PrimerApellido,
        turn: datosGuardados.Turno || "---",
        module: datosGuardados.module || "--"
      });
    }
  }, [])
  // Si respuesta NO es null entonces se guardara primer nombre y apellido, si es NULL en 'nombre' se guardara 'no hay datos'
	const nombre = patients && patients.length > 0 ? patients[0].PrimerNombre + ' ' + patients[0].PrimerApellido : 'No hay datos'
  // Efecto para el reloj
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Función para formatear la fecha
  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('es-ES', options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };


  return (
    // Contenedor principal que ocupa toda la pantalla
    <div className="w-screen h-screen bg-blue-50 overflow-hidden flex flex-col">
      {/* Cabecera con logo y título */}
      <header className="w-full bg-white shadow-md flex justify-between items-center px-10 py-2">
        <h1 className="text-3xl font-bold text-blue-500">Sistema de Turnos</h1>
        <img src={ipsLogo} alt="IPS Logo" className="h-14" />
      </header>
      
      {/* Contenido principal */}
      <div className="flex px-10 py-4 gap-6 h-full">
        {/* Lado izquierdo (3/4 del ancho) */}
        <div className="w-3/4 flex flex-col space-y-4">
          {/* Panel del turno actual */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-500 text-white py-3">
              <h2 className="text-2xl font-bold tracking-wide text-center">TURNO ACTUAL</h2>
            </div>
            <div className="p-6 flex flex-col items-center">
              <div className="mb-2 text-center">
                <p className="text-gray-600 text-lg">Paciente</p>
                <h3 className="text-3xl font-bold text-gray-800">{currentPatient?.name || "Sin paciente"}</h3>
              </div>
              <div className="flex items-center justify-center gap-32 w-full mt-4">
                <div className="text-center">
                  <p className="text-gray-600 text-lg">Turno</p>
                  <h3 className="text-7xl font-bold text-red-700">{currentPatient?.turn || "---"}</h3>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-lg">Módulo</p>
                  <h3 className="text-7xl font-bold text-blue-500">{currentPatient?.module || "--"}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de turnos en espera */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex-grow">
            <div className="bg-blue-500 text-white py-3">
              <h2 className="text-2xl font-bold tracking-wide text-center">TURNOS ACTUALES</h2>
            </div>
            {/* Panel con desplazamiento vertical para la tabla de turnos */}
            <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 48px)" }}>
              <table className="w-full text-left">
                <thead className="bg-blue-100 text-blue-500 sticky top-0">
                  <tr>
                    <th className="py-3 px-6 text-center w-1/6">Módulo</th>
                    <th className="py-3 px-6 w-3/6">Nombre</th>
                    <th className="py-3 px-6 text-center w-2/6">Turno</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Mapeo de la lista de pacientes para mostrarlos en la tabla */}
                  {patients && patients.length > 0 ? (
                    patients.map((patient, index) => (
                        <tr 
                          key={patient.id || index} 
                          className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} border-b border-gray-200`}
                        >
                          <td className="py-4 px-6 text-center font-medium text-lg">{patient.module || "--"}</td>
                          <td className="py-4 px-6 font-medium text-lg">{`${patient.PrimerNombre || ''} ${patient.PrimerApellido || ''}`}</td>
                          <td className="py-4 px-6 text-center font-medium text-lg">{patient.Turno || "--"}</td>
                        </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="py-4 px-6 text-center text-gray-500">
                        No hay pacientes en espera
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Lado derecho (1/4 del ancho) */}
        <div className="w-1/4 flex flex-col space-y-4">
          {/* Panel del reloj */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <p className="text-gray-600 mb-1">Hora actual</p>
            <div className="text-6xl font-bold text-gray-800">
              {/* Formateo de la hora actual en formato 24h */}
              {currentTime.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="mt-3 text-lg text-gray-600">
              {/* Muestra la fecha formateada */}
              {formatDate(currentTime)}
            </div>
          </div>

          {/* Panel de información */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex-grow">
            <h3 className="text-xl font-bold text-blue-500 mb-5">Publicidad</h3>
            <div className="space-y-5">
              {/* Contenido de publicidad */}
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="w-full bg-blue-500 text-white py-3 px-10 flex justify-between items-center mt-auto">
        <div>IPS Universitaria de Colombia</div>
        <div>Atención al paciente: (60) 123-456-7890</div>
      </footer>
      
    </div>
  );
};

export default Screen;