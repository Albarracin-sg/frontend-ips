import { useEffect, useState } from 'react'
import axios from 'axios'

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
		telefono: '',
		tipoDocumento: '',
		documento: '',
		fechaNacimiento: '',
		tipoCita: '',
	})

	//ALTERACION DE INPUTS
	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		//seccion de busqueda
		const datosBusq = {
			data: {
				[dato.opcionSeleccionada]: dato.datoEnviado,
			},
		}

		try {
			console.log(JSON.stringify(datosBusq, null, 2)) // Fixed: changed 'datos' to 'datosBusq'
			await axios.post('http://localhost:3000/api/datoX', datosBusq)
		} catch (error) {
			console.error('ERROR', error)
		}

		//formatea los campos a la hora de enviar
		setDato({
			datoEnviado: '',
			opcionSeleccionada: '',
		})
	}

	//MOSTRAR DATOS DEL BACK EN LOS INPUTS
	useEffect(() => {
		axios
			.get('http://localhost:3000/api/datoX')
			.then((response) => {
				setFormData(response.data)
			})
			.catch((error) => {
				console.error('Error al mostrar los datos del Paciente ', error)
			})
	}, [])

	//Funcion que guarda los datos actualizados y los manda nuevamente al back
	const handleSave = async () => {
		try {
			const response = await axios.post('http://localhost:3000/api/guardarDatos', formData)
			alert('Datos guardados correctamente')
		} catch (error) {
			console.error('Error al guardar:', error)
			alert('Error al guardar los datos')
		}
	}

	return (
		<div className="relative min-h-screen bg-[#c3d9fa] flex justify-center items-center overflow-auto py-4 px-4 lg:py-8">
			<div className="max-w-5xl w-full mx-auto bg-white rounded-lg shadow-xl border border-gray-200">
				<div className="p-4 lg:p-6 max-h-screen overflow-y-auto">
					<h2 className="text-xl lg:text-2xl font-bold text-blue-500 mb-4 lg:mb-6 text-center">
						Sistema de Actualización de Datos
					</h2>

					{/* Barra de búsqueda */}
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-3 mb-4 lg:mb-5 pb-6 border-b-2 border-gray-200"
					>
						<div className="flex flex-col lg:flex-row gap-3">
							<div className="w-full lg:w-1/2">
								<select
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
									value={dato.opcionSeleccionada}
									onChange={(e) =>
										setDato({ ...dato, opcionSeleccionada: e.target.value })
									}
								>
									<option value="">Opción a Buscar</option>
									<option value="cedula">Cédula</option>
								</select>
							</div>
							<div className="w-full lg:w-1/2">
								<input
									type="text"
									name="datoEnviado"
									placeholder="Digita la búsqueda..."
									value={dato.datoEnviado}
									onChange={(e) =>
										setDato({ ...dato, datoEnviado: e.target.value })
									}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								/>
							</div>
						</div>
						<div className="flex justify-center lg:justify-end">
							<button
								type="submit"
								className="cursor-pointer w-full lg:w-auto px-6 py-2 lg:py-3 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
							>
								Buscar
							</button>
						</div>
					</form>

					{/* Formulario */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
						<div className="space-y-3 lg:space-y-4">
							<div>
								<label
									htmlFor="primerNombre"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Primer Nombre
								</label>
								<input
									type="text"
									id="primerNombre"
									name="primerNombre"
									value={formData.primerNombre}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								/>
							</div>
							<div>
								<label
									htmlFor="primerApellido"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Primer Apellido
								</label>
								<input
									type="text"
									id="primerApellido"
									name="primerApellido"
									value={formData.primerApellido}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								/>
							</div>
							<div>
								<label
									htmlFor="localidad"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Localidad
								</label>

								<select
									id="localidad"
									name="localidad"
									value={formData.localidad}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
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
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Tipo de Documento
								</label>

								<select
									id="tipoDocumento"
									name="tipoDocumento"
									value={formData.tipoDocumento}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
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
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Fecha de Nacimiento
								</label>
								<input
									type="date"
									id="fechaNacimiento"
									name="fechaNacimiento"
									value={formData.fechaNacimiento}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								/>
							</div>
						</div>

						<div className="space-y-3 lg:space-y-4">
							<div>
								<label
									htmlFor="segundoNombre"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Segundo Nombre
								</label>
								<input
									type="text"
									id="segundoNombre"
									name="segundoNombre"
									value={formData.segundoNombre}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								/>
							</div>
							<div>
								<label
									htmlFor="segundoApellido"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Segundo Apellido
								</label>
								<input
									type="text"
									id="segundoApellido"
									name="segundoApellido"
									value={formData.segundoApellido}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								/>
							</div>
							<div>
								<label
									htmlFor="telefono"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Número de Teléfono
								</label>
								<input
									type="tel"
									id="telefono"
									name="telefono"
									value={formData.telefono}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								/>
							</div>
							<div>
								<label
									htmlFor="documento"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Documento
								</label>
								<input
									type="text"
									id="documento"
									name="documento"
									value={formData.documento}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								/>
							</div>
							<div>
								<label
									htmlFor="tipoCita"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Tipo de Cita
								</label>

								<select
									id="tipoCita"
									name="tipoCita"
									value={formData.tipoCita}
									onChange={handleInputChange}
									className="w-full p-2 lg:p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
								>
									<option value="">Seleccione un tipo</option>
									<option value="prioritaria">Prioritaria</option>
									<option value="no prioritaria">No prioritaria</option>
								</select>
							</div>
						</div>

						<div className="col-span-1 lg:col-span-2 flex justify-center mt-4 lg:mt-6">
							<button
								onClick={handleSave}
								className="cursor-pointer px-8 lg:px-10 py-2 lg:py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
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
