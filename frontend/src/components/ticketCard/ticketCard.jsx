import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { obtenerRespuesta } from '../formCard/ventanaModal/respuestaStorage'
import ErrorModal from '../formCard/ventanaModal/ErrorModal'

const TicketCard = () => {
	// Estados combinados de ambas versiones
	const [respuesta, setRespuesta] = useState(null)
	const [mostrarSpinner, setMostrarSpinner] = useState(true)
	const [error, setError] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		// Primero intentamos obtener datos del almacenamiento local
		const datosGuardados = obtenerRespuesta()

		if (datosGuardados) {
			setRespuesta(datosGuardados)
			setMostrarSpinner(false)
		} else {
			// Si no hay datos guardados, intentamos obtenerlos de la API
			const obtenerDatos = async () => {
				setMostrarSpinner(true)
				setError(false)

				try {
					const response = await api.get('http://192.168.1.78:3000/api/Envioform')
					const data = response.data

					// Verificar si los datos están vacíos
					if (
						!data ||
						!data.primerNombre ||
						!data.primerApellido ||
						!data.fechaNacimiento ||
						!data.numeroDocumento
					) {
						setError(true)
						setErrorMessage('No se encontraron datos para mostrar.')
						setIsModalOpen(true)
					} else {
						// Formatear los datos recibidos al formato esperado por el componente
						const datosFormateados = {
							PrimerNombre: data.primerNombre,
							PrimerApellido: data.primerApellido,
							Hora: data.hora || new Date().toLocaleTimeString(),
							Turno: data.turno || data.numeroDocumento,
						}

						setRespuesta(datosFormateados)
					}
				} catch (error) {
					console.error('Error al obtener los datos del ticket:', error)
					setError(true)
					setErrorMessage(
						'Error al conectar con el servidor. Por favor, intente nuevamente.'
					)
					setIsModalOpen(true)
				} finally {
					setMostrarSpinner(false)
				}
			}

			obtenerDatos()
		}
	}, [])

	// Manejador para cerrar la modal
	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	// Solo calcular nombre si respuesta existe
	const nombre = respuesta ? respuesta.PrimerNombre + ' ' + respuesta.PrimerApellido : ''

	return (
		<>
			{/* Modal de error */}
			<ErrorModal isOpen={isModalOpen} onClose={handleCloseModal} message={errorMessage} />

			{/* Contenedor del formulario */}
			<div>
				<form
					className="bg-[#d9d9d9] border-[7px] border-[#3c3c3c] p-[0_15px] max-w-[320px] min-w-[400px] h-[500px] min-h-[200px]
                    sm:bg-[#d9d9d9] sm:border-[10px] sm:border-[#3c3c3c] sm:p-[0_30px] sm:w-[90%] sm:max-w-[500px] sm:min-w-[400px] sm:h-[550px]
                    lg:bg-[#d9d9d9] lg:border-[12px] lg:border-[#3c3c3c] lg:p-[0_40px] lg:w-[90%] lg:max-w-[500px] lg:min-w-[200px] lg:h-[600px]"
				>
					<div
						className="relative w-[142px] h-[45px] left-[55px] mt-[-20px] bg-[#1E1E1E] rounded-[10px]
                        sm:relative sm:w-[192px] sm:h-[45px] sm:left-[50px] sm:mt-[-20px]
                        lg:relative lg:w-[192px] lg:h-[45px] lg:left-[60px] lg:mt-[-10px]"
					></div>

					<h1
						className="text-center text-[17px] mt-3 mb-5 font-extrabold tracking-[2.53px] leading-5.1
                        sm:text-[23.1px] sm:mt-[10px] sm:mb-[10px] sm:font-extrabold sm:tracking-[4px] px-[10px] sm:leading-normal
                        lg:text-[24px] lg:mt-[5px] lg:mb-[10px] lg:ml-1 lg:font-extrabold lg:tracking-widest lg:px-[20px] lg:leading-5.1"
					>
						TURNO GENERADO
					</h1>

					<svg
						width="100%"
						height="70%"
						viewBox="0 0 359 527"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="mx-auto"
					>
						<path
							d="M0.5 31.1915C0.5 20.8689 5.80706 11.2713 14.5498 5.78306L15.7981 4.99945C26.1875 -1.52251 39.5009 -1.06226 49.4151 6.16163L53.0571 8.8153C58.2174 12.5754 62.0436 17.8837 63.9789 23.9683L84.481 88.4252C85.4867 91.5871 87.01 94.5603 88.9888 97.2236L114.004 130.892C119.664 138.51 128.594 143 138.085 143H183H229.14C240.145 143 250.267 136.974 255.513 127.299L272.811 95.394C273.602 93.9345 274.271 92.4118 274.81 90.8416L297.841 23.7983C299.894 17.821 303.783 12.6449 308.952 9.00842L313.336 5.9243C323.327 -1.10423 336.659 -1.08436 346.629 5.97392V5.97392C354.273 11.3859 358.817 20.1701 358.817 29.5363V256.432C358.817 260.567 357.963 264.657 356.307 268.445L258.536 492.178C255.314 499.549 249.268 505.318 241.753 508.189L220 516.5L192.45 525.435C186.314 527.425 179.7 527.384 173.588 525.319L147.5 516.5L125.128 508.007C117.853 505.245 111.936 499.764 108.626 492.722L3.35002 268.764C1.47312 264.771 0.5 260.413 0.5 256.002V31.1915Z"
							fill="white"
							strokeWidth="2"
						/>

						{mostrarSpinner ? (
							// Spinner SVG con posición mejorada
							<g>
								<circle
									cx="180"
									cy="250"
									r="70"
									fill="none"
									stroke="#3c3c3c"
									strokeWidth="8"
									strokeOpacity="0.2"
								/>
								<circle
									cx="180"
									cy="250"
									r="70"
									fill="none"
									stroke="#3c3c3c"
									strokeWidth="8"
									strokeDasharray="440"
									strokeDashoffset="160"
								>
									<animateTransform
										attributeName="transform"
										type="rotate"
										from="0 180 250"
										to="360 180 250"
										dur="1s"
										repeatCount="indefinite"
									/>
								</circle>
							</g>
						) : (
							// Contenido normal cuando los datos están disponibles
							<>
								{respuesta && (
									<>

										<text
											x="50%"
											y="41%"
											textAnchor="middle"
											fill="black"
											fontSize="40"
											fontWeight="bold"
											dy=".3em"
											textLength="350"
											lengthAdjust="spacingAndGlyphs"
										>
											Sebastian Albarracin
										</text>

										<text
											x="50%"
											y="56%"
											textAnchor="middle"
											fill="black"
											fontSize="36"
											dy=".3em"
										>
											12:55:45
										</text>

										<text
											x="50%"
											y="78%"
											textAnchor="middle"
											fill="black"
											fontSize="70"
											fontWeight="bold"
											dy=".3em"
										>
											C100
										</text>
									</>
								)}
							</>
						)}
					</svg>

					<div className="mt-2 text-center">
						<label
							className="text-[12.5px] tracking-widest font-bold
                            sm:text-[16px] sm:tracking-widest
                            lg:text-[18px] lg:tracking-widest"
						>
							ESPERA AL LLAMADO DEL NÚMERO
						</label>
					</div>
				</form>
			</div>
		</>
	)
}

export default TicketCard
