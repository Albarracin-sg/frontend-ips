import { useState, useEffect } from 'react'
import ipsLogo from '../../assets/ipsBlack.png'

const Screen = () => {
	const [currentTime, setCurrentTime] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	const options = { weekday: 'short', day: 'numeric', month: 'numeric' }
	const formattedDate = currentTime.toLocaleDateString('es-ES', options)
	let hours = currentTime.getHours()
	const minutes = currentTime.getMinutes().toString().padStart(2, '0')
	const ampm = hours >= 12 ? 'PM' : 'AM'
	hours = hours % 12 || 12
	const formattedTime = `${hours}:${minutes} ${ampm}`

	return (
		<div className="bg-[#d9d9d9] border-[#3c3c3c] h-screen w-screen flex items-center justify-center">
			<div className="relative flex flex-col h-screen w-screen">
				<div className="absolute top-[20px] right-[20px]">
					<img src={ipsLogo} alt="IPS Logo" className="w-[120px]" />
				</div>

				<div className="relative flex-1 flex justify-center items-center gap-10 mt-[20px]">
					{/* Reloj Digital */}

					{/* Sección del Turno Actual */}
					<div className="bg-[#d9d9d9] border-[18px] border-[#3c3c3c] ml-220 w-3/12 h-full mt-[12px] flex flex-col items-center justify-center">
						<div className="absolute w-[192px] h-[60px] top-[-10px] bg-[#1E1E1E] rounded-[10px]" />
						<h2 className="text-3xl font-bold text-center tracking-[3px] uppercase mb-8">
							Turno actual
						</h2>
						<h2 className="text-3xl font-bold text-center uppercase mb-8">
							Javier Alexander Gomez Quiroz
						</h2>
						<h2 className="text-5xl font-bold text-center text-[#9B0000] uppercase">
							TURNO
						</h2>
					</div>
					<div className="bg-gray-300 border-4 border-gray-500 rounded-lg p-4 text-center shadow-lg w-[200px]">
						<div className="text-6xl font-bold">{formattedTime}</div>
						<div className="text-xl mt-2">{formattedDate}</div>
					</div>
				</div>

				{/* Sección de la Cola de Turnos */}
				<div className="relative flex-1">
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
							{[1, 2, 3, 4, 5].map((index) => (
								<tr
									key={index}
									className={`${
										index === 1 ? 'bg-[#42A5F5]' : 'bg-[#90CAF9]'
									} rounded-[20px]`}
								>
									<td className="font-bold text-xl text-left p-9 ">{index}</td>
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
