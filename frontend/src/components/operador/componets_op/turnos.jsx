const TurnoOp = () => {
	return(
		<div className="w-full h-screen flex flex-col">		
			<div className="flex-1 flex items-center justify-center">
				<div className="w-full max-w-6xl">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" class="px-6 py-3">
									Turnos en Cola
								</th>
								<th scope="col" class="px-10 py-3">
									Nombre
								</th>
								<th scope="col" class="px-10 py-3">
									Turno
								</th>
								
								<th scope="col" class="px-10 py-3">
									Modulo
								</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
									1
								</th>
								<td class="px-10 py-4 text-white">
									Juan Pablo Ramirez Mora
								</td>
								<td class="px-10 py-4 text-white">
									G129
								</td>
								<td class="px-10 py-4 text-white ">
									Pediatria
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
									2
								</th>
								<td class="px-10 py-4 text-white">
									Javier Alexander Gomez Delgado
								</td>
								<td class="px-10 py-4 text-white ">
									N223
								</td>
								<td class="px-10 py-4 text-white">
									Otorrinolaringologo
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
									3
								</th>
								<td class="px-10 py-4 text-white">
									Ramiro Felipe Troches Martinez
								</td>
								<td class="px-10 py-4 text-white">
									N554
								</td>
								<td class="px-10 py-4 text-white">
									Nutriologia
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									4
								</th>
								<td class="px-10 py-4 text-white">
									Juan Pablo Ramirez Mora
								</td>
								<td class="px-10 py-4 text-white">
									G129
								</td>
								<td class="px-10 py-4 text-white">
									Pediatria
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									5
								</th>
								<td class="px-10 py-4 text-white">
									Javier Alexander Gomez Delgado
								</td>
								<td class="px-10 py-4 text-white">
									N223
								</td>
								<td class="px-10 py-4 text-white">
									Otorrinolaringologo
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									6
								</th>
								<td class="px-10 py-4 text-white">
									Ramiro Felipe Troches Martinez
								</td>
								<td class="px-10 py-4 text-white">
									N554
								</td>
								<td class="px-10 py-4 text-white">
									Nutriologia
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									7
								</th>
								<td class="px-10 py-4 text-white">
									Juan Pablo Ramirez Mora
								</td>
								<td class="px-10 py-4 text-white">
									G129
								</td>
								<td class="px-10 py-4 text-white">
									Pediatria
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									8
								</th>
								<td class="px-10 py-4 text-white">
									Ramiro Felipe Troches Martinez
								</td>
								<td class="px-10 py-4 text-white">
									N554
								</td>
								<td class="px-10 py-4 text-white">
									Nutriologia
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									9
								</th>
								<td class="px-10 py-4 text-white">
									Juan Pablo Ramirez Mora
								</td>
								<td class="px-10 py-4 text-white">
									G129
								</td>
								<td class="px-10 py-4 text-white">
									Pediatria
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									10
								</th>
								<td class="px-10 py-4 text-white">
									Javier Alexander Gomez Delgado
								</td>
								<td class="px-10 py-4 text-white">
									N223
								</td>
								<td class="px-10 py-4 text-white">
									Otorrinolaringologo
								</td>
							</tr>
							
						</tbody>
					</table>
					<button
						href="#"
						className="block py-2 px-10 rounded bg-blue-500 hover:bg-blue-700 text-white transition-colors cursor-pointer mt-2 lg:mt-10 mx-auto"
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