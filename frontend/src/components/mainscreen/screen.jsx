import { useState, useEffect } from 'react'
import ipsLogo from '../../assets/ipsBlack.png'

/**
 * Componente funcional Screen
 * Este componente representa una pantalla con una lista de turnos y la información del turno actual.
 */
const Screen = () => {
	const [currentTime, setCurrentTime] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000) // Actualiza cada segundo

		return () => clearInterval(interval) // Limpia el intervalo al desmontar
	}, [])

	// Formato de fecha y hora
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	const formattedDate = currentTime.toLocaleDateString('es-ES', options)
	const formattedTime = currentTime.toLocaleTimeString('es-ES')

	return (
		<div className="bg-[#d9d9d9] border-[12px] border-[#3c3c3c] h-screen w-screen flex items-center justify-center">
			<div className="relative flex flex-col h-screen w-screen">
				{/* Logo - Posicionado en la esquina superior derecha */}
				<div className="absolute top-[20px] right-[20px]">
					<img src={ipsLogo} alt="IPS Logo" className="w-[120px]" />
				</div>

				{/* Sección del Turno Actual - A la derecha */}
				<div className="relative flex-1  mb-[40px] flex justify-end mr-[200px]">
					<div className="bg-[#d9d9d9] border-[18px] border-[#3c3c3c] w-4/12 h-full mt-[12px] flex flex-col items-center justify-center">
						{/* Decoración negra */}
						<div className="absolute w-[192px] h-[60px] top-[-10px] bg-[#1E1E1E] rounded-[10px]" />

						<h2 className="text-3xl font-bold text-center tracking-[3px] uppercase mb-8">
							Turno actual
						</h2>
						<h2 className="text-3xl font-bold text-center uppercase mb-8">
							Javier Alexander Gomez
						</h2>
						<h2 className="text-5xl font-bold text-center text-[#9B0000] uppercase">
							TURNO
						</h2>

						{/* Fecha y Hora */}
						<div className="relative bottom-[-10px] left-0 w-full flex flex-col items-center justify-center gap-4">
							<h2 className="font-bold text-xl uppercase">{formattedDate}</h2>
							<h2 className="font-bold text-xl">{formattedTime}</h2>
						</div>
					</div>
				</div>

				{/* Sección de la Cola de Turnos (Tabla) */}
				<div className="relative flex-1">
					{/* Encabezado de la tabla */}
					<table className="w-full table-auto border-separate border-spacing-0">
						<thead>
							<tr className="bg-none">
								<th className="font-bold text-xl whitespace-pre-line p-4 text-left">
									MODULO /<br /> CONSULTA
								</th>
								<th className="font-medium text-xl p-4 text-center">NOMBRE</th>
								<th className="font-medium text-xl p-4 text-center">TURNO</th>
							</tr>
						</thead>
						<tbody>
							{/* Elementos de la cola - Generados dinámicamente con map */}
							{[1, 2, 3, 4, 5].map((index) => (
								<tr
									key={index}
									className={`${
										index === 1 ? 'bg-[#42A5F5]' : 'bg-[#90CAF9]'
									} rounded-[20px]`}
								>
									<td className="font-bold text-xl text-center p-4">{index}</td>
									<td className="font-bold text-xl text-center p-4">
										{
											[
												'Javier Gomez',
												'Camilo Albarracin',
												'Alex Quiroz',
												'Esteban Molina',
												'Santiago Salazar',
											][index - 1]
										}
									</td>
									<td className="font-bold text-xl text-center p-4">
										<p className="text-4xl font-bold">-</p>
										<p className="font-bold text-xl">D290</p>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Screen
