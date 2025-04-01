import { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../services/api'

const InicioOp = () => {
	//datos de busqueda
	const [dato, setDato] = useState({
		datoEnviado: '', //dato a buscar en la BD
		opcionSeleccionada: '', //opcion de dato a buscar (cedula)
	})

	//informacion de formulario de actualizacion de datos
	const [formData, setFormData] = useState({
		primerNombre: '',
		segundoNombre: '',
		primerApellido: '',
		segundoApellido: '',
		localidad: '',
		numeroDocumento: '',
		fechaNacimiento: '',
		tipoDocumento: '',
		numeroTelefono: '',
		tipoDeCitas: '',
	})

	//ALTERACION DE INPUTS
	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData({
			//altera el FormData
			...formData, //mantiene los datos actuales
			[name]: value, //extrae el name y el value del campo que activo el e.target
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault() //evita que se recargue

		//seccion de busqueda
		const datosBusq = {
			//el back recibira el valor de 'busqueda' con la opcion seleccionada y el dato a enviar [cedula:"12345"]
			NumeroDocumento: dato.datoEnviado,
		}
		console.log('Enviando datos:', JSON.stringify(datosBusq, null, 2))

		try {
			//muestra la constante con los datos que se van a enviar al back para la consulta
			//la respuesta del back se almacena en una constante llamada response en caso de que se necesite para mostrar datos (se va a hacer)
			const response = await api.post('/api/getActualizacion', datosBusq)
			const respuesta = response.data
			console.log('Respuesta:', respuesta)
			
			// Actualizar el formulario con los datos recibidos, mapeando correctamente los nombres de campos
			if (respuesta && Object.keys(respuesta).length > 0) {
				// Mapear los campos del backend a los nombres de los campos en el frontend
				setFormData({
					primerNombre: respuesta.PrimerNombre || '',
					segundoNombre: respuesta.SegundoNombre || '',
					primerApellido: respuesta.PrimerApellido || '',
					segundoApellido: respuesta.SegundoApellido || '',
					localidad: respuesta.Localidad || '',
					numeroDocumento: respuesta.NumeroDocumento || '',
					// Formatear la fecha para input type="date"
					fechaNacimiento: respuesta.FechaNacimiento ? respuesta.FechaNacimiento.split('T')[0] : '',
					tipoDocumento: respuesta.TipoDeDocumento_ID || '',
					numeroTelefono: respuesta.NumeroTelefono || '',
					tipoDeCitas: respuesta.TipoDeCitas_ID || '',
				})
			} else {
				alert('No se encontraron datos para este documento')
			}
		} catch (error) {
			console.error('ERROR', error)
			alert('Error al buscar los datos del paciente')
		}

		//formatea los campos a la hora de enviar
		setDato({
			datoEnviado: '',
			opcionSeleccionada: '',
		})
	}

	//Funcion que guarda los datos actualizados y los manda nuevamente al back
	//Funcion que guarda los datos actualizados y los manda nuevamente al back
// Replace this in your handleSave function
const handleSave = async () => {
		try {
		// Convertir formData a formato esperado por el backend
		const dataToSend = {
			PrimerNombre: formData.primerNombre,
			SegundoNombre: formData.segundoNombre,
			PrimerApellido: formData.primerApellido,
			SegundoApellido: formData.segundoApellido,
			Localidad: formData.localidad,
			NumeroDocumento: formData.numeroDocumento,
			FechaNacimiento: formData.fechaNacimiento,
			TipoDeDocumento_ID: formData.tipoDocumento,
			NumeroTelefono: formData.numeroTelefono,
			TipoDeCitas_ID: formData.tipoDeCitas
		};
		
		console.log('Enviando datos para actualizar:', dataToSend);
		
		// Actualizar en el backend
		await api.patch('/api/ActualizacionForm', dataToSend);
		
		// Actualizar también en localStorage para TurnoOp
		const respuestaAPI = localStorage.getItem('respuestaAPI');
		if (respuestaAPI) {
			let turnos = JSON.parse(respuestaAPI);
			
			// Encontrar y actualizar el paciente en la lista de turnos
			const pacienteIndex = turnos.findIndex(
			paciente => paciente.NumeroDocumento === dataToSend.NumeroDocumento
			);
			
			if (pacienteIndex !== -1) {
			// Actualizar los datos del paciente, manteniendo su turno y otra información específica
			turnos[pacienteIndex] = {
				...turnos[pacienteIndex],
				PrimerNombre: dataToSend.PrimerNombre,
				SegundoNombre: dataToSend.SegundoNombre,
				PrimerApellido: dataToSend.PrimerApellido,
				SegundoApellido: dataToSend.SegundoApellido,
				Localidad: dataToSend.Localidad,
				NumeroDocumento: dataToSend.NumeroDocumento,
				FechaNacimiento: dataToSend.FechaNacimiento,
				TipoDeDocumento_ID: dataToSend.TipoDeDocumento_ID,
				NumeroTelefono: dataToSend.NumeroTelefono,
				TipoDeCitas_ID: dataToSend.TipoDeCitas_ID
			};
			
			// Guardar de vuelta en localStorage
			localStorage.setItem('respuestaAPI', JSON.stringify(turnos));
			
			// Actualizar el turno actual si es el mismo paciente
			const currentTurn = localStorage.getItem('currentTurn');
			if (currentTurn) {
				const currentTurnData = JSON.parse(currentTurn);
				if (currentTurnData.NumeroDocumento === dataToSend.NumeroDocumento) {
				const updatedCurrentTurn = {
					...currentTurnData,
					...dataToSend
				};
				localStorage.setItem('currentTurn', JSON.stringify(updatedCurrentTurn));
				}
			}
			
			// Disparar evento storage para que otros componentes se actualicen
			window.dispatchEvent(new Event('storage'));
			}
		}
		
		alert('Datos guardados correctamente');
		} catch (error) {
		console.error('Error al guardar:', error);
		alert('Error al guardar los datos: ' + (error.response?.data?.error || error.message));
		}
	};
	return (
		<div className="relative min-h-screen bg-[#c3d9fa] flex justify-center items-center overflow-hidden ">
			<div className="lg:h-[85%] xl:h-[90%] max-w-5xl w-full mx-auto bg-white rounded-lg shadow-xl border border-gray-200">
				<div className="p-2 md:p-4">
					<h2 className="text-xl md:text-2xl font-bold text-blue-500 mb-4 md:mb-6 text-center">
						Sistema de Actualizacion de Datos
					</h2>

					{/* Barra de búsqueda */}
					<form
						onSubmit={handleSubmit}
						className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 md:mb-8 pb-4 md:pb-6 border-b-2 border-gray-200"
					>
						<div className="flex-1">
							<select
								className="w-full p-2 md:p-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								value={dato.opcionSeleccionada}
								onChange={(e) =>
									setDato({ ...dato, opcionSeleccionada: e.target.value })
								}
							>
								<option value="">Opción a Buscar</option>
								<option value="Cedula">Cédula</option>
							</select>
						</div>
						<div className="flex-1">
							<input
								type="text"
								name="datoEnviado"
								placeholder="Digita la búsqueda..."
								value={dato.datoEnviado}
								onChange={(e) => setDato({ ...dato, datoEnviado: e.target.value })}
								className="w-full p-2 md:p-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
							/>
						</div>
						<div>
							<button
								type="submit"
								className="cursor-pointer w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center text-sm md:text-base"
							>
								Buscar
							</button>
						</div>
					</form>

					{/* Formulario */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
						<div className="space-y-3 md:space-y-4">
							<div>
								<label
									htmlFor="primerNombre"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Primer Nombre
								</label>
								<input
									type="text"
									id="primerNombre"
									name="primerNombre"
									value={formData.primerNombre}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								/>
							</div>
							<div>
								<label
									htmlFor="primerApellido"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Primer Apellido
								</label>
								<input
									type="text"
									id="primerApellido"
									name="primerApellido"
									value={formData.primerApellido}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								/>
							</div>
							<div>
								<label
									htmlFor="localidad"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Localidad
								</label>

								<select
									id="localidad"
									name="localidad"
									value={formData.localidad}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
									required
								>
									<option value="" disabled>
										Seleccione su localidad
									</option>
									<option value="usaquen">Usaquén</option>
									<option value="chapinero">Chapinero</option>
									<option value="santa_fe">Santa Fe</option>
									<option value="san_cristobal">San Cristóbal</option>
									<option value="usme">Usme</option>
									<option value="tunjuelito">Tunjuelito</option>
									<option value="bosa">Bosa</option>
									<option value="kennedy">Kennedy</option>
									<option value="fontibon">Fontibón</option>
									<option value="engativa">Engativá</option>
									<option value="suba">Suba</option>
									<option value="barrios_unidos">Barrios Unidos</option>
									<option value="teusaquillo">Teusaquillo</option>
									<option value="los_martires">Los Mártires</option>
									<option value="antonio_nariño">Antonio Nariño</option>
									<option value="puente_aranda">Puente Aranda</option>
									<option value="la_candelaria">La Candelaria</option>
									<option value="rafael_uribe_uribe">Rafael Uribe Uribe</option>
									<option value="ciudad_bolivar">Ciudad Bolívar</option>
									<option value="sumapaz">Sumapaz</option>
									<option value="soacha">Soacha</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="tipoDocumento"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Tipo de Documento
								</label>

								<select
									id="tipoDocumento"
									name="tipoDocumento"
									value={formData.tipoDocumento}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								>
									<option value="">Seleccione un tipo</option>
									<option value="Cédula de ciudadanía">
										Cédula de ciudadanía
									</option>
									<option value="Pasaporte">Pasaporte</option>
									<option value="Tarjeta de identidad">
										Tarjeta de identidad
									</option>
									<option value="Cédula de extranjería">
										Cédula de extranjería
									</option>
									<option value="Registro civil">Registro civil</option>
									<option value="Permiso especial de permanencia">
										Permiso especial de permanencia
									</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="fechaNacimiento"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Fecha de Nacimiento
								</label>
								<input
									type="date"
									id="fechaNacimiento"
									name="fechaNacimiento"
									value={formData.fechaNacimiento}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								/>
							</div>
						</div>

						<div className="space-y-3 md:space-y-4">
							<div>
								<label
									htmlFor="segundoNombre"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Segundo Nombre
								</label>
								<input
									type="text"
									id="segundoNombre"
									name="segundoNombre"
									value={formData.segundoNombre}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								/>
							</div>
							<div>
								<label
									htmlFor="segundoApellido"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Segundo Apellido
								</label>
								<input
									type="text"
									id="segundoApellido"
									name="segundoApellido"
									value={formData.segundoApellido}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								/>
							</div>
							<div>
								<label
									htmlFor="telefono"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Número de Teléfono
								</label>
								<input
									type="tel"
									id="numeroTelefono"
									name="numeroTelefono"
									value={formData.numeroTelefono}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								/>
							</div>
							<div>
								<label
									htmlFor="document"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Documento
								</label>
								<input
									type="text"
									name="numeroDocumento"
									value={formData.numeroDocumento}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								/>
							</div>
							<div>
								<label
									htmlFor="tipoDeCitas"
									className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
								>
									Tipo de Cita
								</label>

								<select
									id="tipoDeCitas"
									name="tipoDeCitas"
									value={formData.tipoDeCitas}
									onChange={handleInputChange}
									className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm md:text-base"
								>
									<option value="">Seleccione un tipo</option>
									<option value="prioritaria">Prioritaria</option>
									<option value="no prioritaria">No prioritaria</option>
								</select>
							</div>
						</div>

						<div className="col-span-1 md:col-span-2 flex justify-center mt-1 md:mt-2">
							<button
								onClick={handleSave}
								className="px-8 md:px-10 py-2 md:py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform cursor-pointer hover:scale-105 text-sm md:text-base"
							>
								GUARDAR
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InicioOp