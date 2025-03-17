import React from 'react'
import { useState, useEffect } from 'react'
import NewTurn from './newForm'
import axios from 'axios'

const TurnoOp = ({ setComponenteActual }) => {
	//declaracion de los turnos de los pacientes con un array vacio
	const [turnos, setTurnos] = useState([])

	useEffect(() => {
		//Funcion asincrona que hace la peticion de los turnos
		const obtenerTurnos = async () => {
			try {
				const response = await axios.get('http://localhost:3000/api/turnos')
				//La respuesta del back lo implementa en turnos mediante setTurnos por lo que turnos quedaria con todo el array de objetos que tenga el back
				setTurnos(response.data)
			} catch (error) {
				console.error('Error al obtener los turnos:', error)
			}
		}
		//se llama la funcion
		obtenerTurnos()
	}, [])

	return (
		//contenedor de fondo - made full size with responsive padding
		<div className="w-full min-h-screen flex flex-col bg-[#c3d9fa] p-2 sm:p-4 md:p-6">
			{/* Contenedor para centrar - improved for better responsiveness */}
			<div className="flex-1 flex items-center justify-center">
				{/*targeta blanca donde esta la tabla - improved max width constraints */}
				<div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
					{/* Encabezado azul - responsive padding */}
					<header className="p-3 sm:p-4 md:p-5 bg-blue-500 text-white">
						<h2 className="text-xl sm:text-2xl font-bold">Gestión de Turnos</h2>
						<p className="text-xs sm:text-sm opacity-80">
							Sistema de administración de cola de espera
						</p>
					</header>
					{/* Tabla de turnos - with responsive container */}
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
							<tbody>
								{/* Creación de array de objetos que representará la lista de turnos en cola */}
								{turnos.map((paciente, index) => (
									<tr
										key={paciente.id}
										className={`
                      border-b border-gray-100 hover:bg-blue-50 transition-colors
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      ${index === 0 ? 'bg-blue-100 hover:bg-blue-100' : ''}
                    `}
									>
										{/* COLUMNA PARA EL ID - responsive padding */}
										<th
											scope="row"
											className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-medium whitespace-nowrap"
										>
											<span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full">
												{paciente.id}
											</span>
										</th>

										{/* COLUMNA PARA EL NOMRBE - responsive padding */}
										<td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-medium truncate max-w-[140px] sm:max-w-[200px] md:max-w-none">
											{paciente.nombre}
										</td>

										{/* COLUMNA PARA EL TURNO - responsive padding and sizing */}
										<td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
											<span className="inline-flex items-center rounded-full bg-sky-100 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium text-sky-800">
												{paciente.turno}
											</span>
										</td>

										{/* COLUMNA PARA EL MODULO - responsive padding and sizing */}
										<td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
											<span
												className={`inline-flex items-center rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium
                        ${
							paciente.modulo === 'No Prioritario'
								? 'bg-blue-100 text-blue-800'
								: paciente.modulo === 'Prioritario'
								? 'bg-red-100 text-red-800'
								: ''
						}
                      `}
											>
												{paciente.modulo}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Responsive footer */}
					<footer className="p-3 sm:p-4 md:p-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
						<div className="text-xs sm:text-sm text-gray-500 w-full sm:w-auto text-center sm:text-left">
							Mostrando {turnos.length} de {turnos.length} turnos
						</div>
						<button
							onClick={() => setComponenteActual(<NewTurn />)}
							className="flex items-center justify-center cursor-pointer gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded bg-blue-500 hover:bg-blue-700 text-white transition-colors font-medium shadow-sm w-full sm:w-auto"
						>
							Nuevo Turno
						</button>
					</footer>
				</div>
			</div>
		</div>
	)
}

export default TurnoOp
