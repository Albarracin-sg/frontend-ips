// Importaciones necesarias de React y componentes
import React from 'react'
import { useState, useEffect } from 'react'
import NewTurn from './newForm'
import Screen from '../mainscreen/screen'
import { obtenerRespuesta, guardarRespuesta } from '../../services/localStorage/respuestaStorage'

// Componente principal para la gestión de turnos
const TurnoOp = ({ setComponenteActual }) => { 
    // Estados para manejar la lista de pacientes y la visualización de la pantalla
    const [patients, setPatients] = useState([])
    const [showScreen, setShowScreen] = useState(false)

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

    // Efecto para cargar turnos inicialmente y escuchar cambios
    useEffect(() => {
        loadTurnos();
        
        // Escuchar cambios en localStorage
        window.addEventListener('storage', loadTurnos);
        return () => window.removeEventListener('storage', loadTurnos);
    }, []);

    // Manejador para pasar al siguiente turno
    const handleSiguienteTurno = () => {
        if (patients.length > 0) {
            const siguientePaciente = patients[0];
            const updatedPatients = patients.slice(1);
            
            // Actualizar turno actual en localStorage
            localStorage.setItem('currentTurn', JSON.stringify(siguientePaciente));
            
            // Actualizar estado y localStorage
            setPatients(updatedPatients);
            guardarRespuesta(updatedPatients);
            
            // Notificar a otras ventanas del cambio
            window.dispatchEvent(new Event('storage'));
        }
    };

    // Manejador para crear un nuevo turno
    const handleNuevoTurno = () => {
        setComponenteActual(<NewTurn onTurnoCreado={loadTurnos} />);
    };

    // Renderizado condicional de la pantalla completa
    if (showScreen) {
        return <Screen 
            initialPatient={patients[0]} 
            remainingPatients={patients.slice(1)} 
            onReturn={() => setShowScreen(false)}
            onNuevoTurno={handleNuevoTurno}
        />;
    }

    // Renderizado principal del componente
    return (
        // Contenedor principal con fondo azul claro
        <div className="w-full min-h-screen flex flex-col bg-[#c3d9fa] p-2 sm:p-4 md:p-6">
            <div className="flex-1 flex items-center justify-center">
                {/* Tarjeta principal con sombra */}
                <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Encabezado */}
                    <header className="p-3 sm:p-4 md:p-5 bg-blue-500 text-white">
                        <h2 className="text-xl sm:text-2xl font-bold">Gestión de Turnos</h2>
                        <p className="text-xs sm:text-sm opacity-80">
                            Sistema de administración de cola de espera
                        </p>
                    </header>

                    {/* Tabla de turnos */}
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm">
                            {/* Encabezados de la tabla */}
                            <thead>
                                <tr className="bg-blue-50 text-blue-500">
                                    <th scope="col" className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-medium rounded-tl-lg">
                                        <span className="flex items-center">#</span>
                                    </th>
                                    <th scope="col" className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-medium">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-medium">
                                        Turno
                                    </th>
                                    <th scope="col" className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-medium rounded-tr-lg">
                                        Módulo
                                    </th>
                                </tr>
                            </thead>
                            {/* Cuerpo de la tabla */}
                            <tbody>
                                {/* Mapeo de pacientes */}
                                {patients.map((patient, index) => (
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

                    {/* Pie de página con botones de acción */}
                    <footer className="p-3 sm:p-4 md:p-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
                        {/* Contador de turnos */}
                        <div className="text-xs sm:text-sm text-gray-500 w-full sm:w-auto text-center sm:text-left">
                            Mostrando {patients.length} de {patients.length} turnos
                        </div>
                        {/* Botones de acción */}
                        <div className="flex gap-2">
                            <button
                                onClick={handleSiguienteTurno}
                                className="flex items-center justify-center cursor-pointer gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded bg-green-500 hover:bg-green-700 text-white transition-colors font-medium shadow-sm w-full sm:w-auto"
                            >
                                Siguiente Turno
                            </button>
                            <button
                                onClick={handleNuevoTurno}
                                className="flex items-center justify-center cursor-pointer gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded bg-blue-500 hover:bg-blue-700 text-white transition-colors font-medium shadow-sm w-full sm:w-auto"
                            >
                                Nuevo Turno
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

// Exportar el componente
export default TurnoOp