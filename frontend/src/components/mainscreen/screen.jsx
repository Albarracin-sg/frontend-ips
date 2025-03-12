import { useState, useEffect } from "react";
import ipsLogo from "../../assets/ipsBlack.png";

const Screen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [patients, setPatients] = useState([
    { id: 1, name: "Javier Gomez", turn: "D290", module: 1 },
    { id: 2, name: "Camilo Albarracin", turn: "D291", module: 2 },
    { id: 3, name: "Alex Quiroz", turn: "D292", module: 3 },
    { id: 4, name: "Esteban Molina", turn: "D293", module: 2 },
    { id: 5, name: "Santiago Salazar", turn: "D294", module: 1 },
  ]);
  const [currentPatient, setCurrentPatient] = useState({
    name: "Javier Alexander Gomez Quiroz",
    turn: "D290",
    module: 3
  });

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format date in Spanish
  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('es-ES', options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
    <div className="w-screen h-screen bg-blue-50 overflow-hidden flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-md flex justify-between items-center px-10 py-2">
        <h1 className="text-3xl font-bold text-blue-700">Sistema de Turnos</h1>
        <img src={ipsLogo} alt="IPS Logo" className="h-14" />
      </header>
      
      {/* Main content */}
      <div className="flex px-10 py-4 gap-6 h-full">
        {/* Left side (3/4 width) */}
        <div className="w-3/4 flex flex-col space-y-4">
          {/* Current turn panel */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white py-3">
              <h2 className="text-2xl font-bold tracking-wide text-center">TURNO ACTUAL</h2>
            </div>
            <div className="p-6 flex flex-col items-center">
              <div className="mb-2 text-center">
                <p className="text-gray-600 text-lg">Paciente</p>
                <h3 className="text-3xl font-bold text-gray-800">{currentPatient.name}</h3>
              </div>
              <div className="flex items-center justify-center gap-32 w-full mt-4">
                <div className="text-center">
                  <p className="text-gray-600 text-lg">Turno</p>
                  <h3 className="text-7xl font-bold text-red-700">{currentPatient.turn}</h3>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-lg">Módulo</p>
                  <h3 className="text-7xl font-bold text-blue-700">{currentPatient.module}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Queue list */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex-grow">
            <div className="bg-blue-600 text-white py-3">
              <h2 className="text-2xl font-bold tracking-wide text-center">TURNOS ACTUALES</h2>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 48px)" }}>
              <table className="w-full text-left">
                <thead className="bg-blue-100 text-blue-800 sticky top-0">
                  <tr>
                    <th className="py-3 px-6 text-center w-1/6">Módulo</th>
                    <th className="py-3 px-6 w-3/6">Nombre</th>
                    <th className="py-3 px-6 text-center w-2/6">Turno</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr 
                      key={patient.id} 
                      className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} border-b border-gray-200`}
                    >
                      <td className="py-4 px-6 text-center font-medium text-lg">{patient.module}</td>
                      <td className="py-4 px-6 font-medium text-lg">{patient.name}</td>
                      <td className="py-4 px-6 text-center font-medium text-lg">{patient.turn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right side (1/4 width) */}
        <div className="w-1/4 flex flex-col space-y-4">
          {/* Clock panel */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <p className="text-gray-600 mb-1">Hora actual</p>
            <div className="text-6xl font-bold text-gray-800">
              {currentTime.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="mt-3 text-lg text-gray-600">
              {formatDate(currentTime).split(' de ').join(' de\n')}
            </div>
          </div>

          {/* Information panel */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex-grow">
            <h3 className="text-xl font-bold text-blue-700 mb-5">Información</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0"> </span>
                <span className="text-gray-700">Por favor, esté atento a su turno</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700">Tenga sus documentos preparados</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700">Recuerde mantener su distancia en la sala de espera</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-blue-600 text-white py-3 px-10 flex justify-between items-center mt-auto">
        <div>IPS Universitaria de Colombia</div>
        <div>Atención al paciente: (60) 123-456-7890</div>
      </footer>
    </div>
  );
};

export default Screen;