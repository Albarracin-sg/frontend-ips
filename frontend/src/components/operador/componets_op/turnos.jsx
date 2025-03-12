import NewTurn from "./newForm"

const TurnoOp = ({ setComponenteActual }) => {
	return(
		<div className="w-full h-screen flex flex-col 2xl:w-full 2xl:h-screen 2xl:flex 2xl:flex-col">		
			<div className="flex-1 flex items-center justify-center 2xl:flex-1 2xl:flex 2xl:items-center 2xl:justify-center">
				<div className="w-full max-w-6xl 2xl:w-full 2xl:max-w-6xl">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 2xl:w-full 2xl:text-sm 2xl:text-left 2xl:rtl:text-right 2xl:text-gray-500 2xl:dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 2xl:text-xs 2xl:text-gray-700 2xl:uppercase 2xl:bg-gray-50 2xl:dark:bg-gray-700 2xl:dark:text-gray-400">
							<tr>
								<th scope="col" class="px-5 py-3 2xl:px-6 2xl:py-3">
									Turnos en Cola
								</th>
								<th scope="col" class="px-5 py-3 2xl:px-10 2xl:py-3">
									Nombre
								</th>
								<th scope="col" class="px-5 py-3 2xl:px-10 2xl:py-3">
									Turno
								</th>
								
								<th scope="col" class="px-5 py-3 2xl:px-10 2xl:py-3">
									Modulo
								</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									1
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Juan Pablo Ramirez Mora
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									G129
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Pediatria
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									2
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Javier Alexander Gomez Delgado
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									N223
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Otorrinolaringologo
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									3
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Ramiro Felipe Troches Martinez
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									N554
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Nutriologia
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									4
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Juan Pablo Ramirez Mora
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									G129
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Pediatria
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									5
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Javier Alexander Gomez Delgado
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									N223
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Otorrinolaringologo
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									6
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Ramiro Felipe Troches Martinez
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									N554
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Nutriologia
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									7
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Juan Pablo Ramirez Mora
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									G129
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Pediatria
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									8
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Ramiro Felipe Troches Martinez
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									N554
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Nutriologia
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									9
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Juan Pablo Ramirez Mora
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									G129
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Pediatria
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 2xl:bg-white 2xl:border-b 2xl:dark:bg-gray-800 2xl:dark:border-gray-700 2xl:border-gray-200">
								<th scope="row" class="px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white 2xl:px-6 2xl:py-4 2xl:font-medium 2xl:text-gray-900 2xl:whitespace-nowrap 2xl:dark:text-white">
									10
								</th>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Javier Alexander Gomez Delgado
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									N223
								</td>
								<td class="px-5 py-3 text-white 2xl:px-10 2xl:py-4 2xl:text-white">
									Otorrinolaringologo
								</td>
							</tr>
							
						</tbody>
					</table>
					<button
						onClick={() => setComponenteActual(<NewTurn />)}
						className="block py-3 px-5 rounded bg-blue-500 hover:bg-blue-700 text-white transition-colors cursor-pointer mt-2 mx-auto"
					>
						Nuevo Turno
					</button>
				</div>
			</div>
		</div>
	)
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default TurnoOp