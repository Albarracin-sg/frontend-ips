import { useState } from 'react';
import axios from 'axios';

const InicioOp = () => {
	const [dato, setDato] = useState({
		datoEnviado: "",
		opcionSeleccionada: ""
	});
	
	const [formData, setFormData] = useState({
		primerNombre: "",
		segundoNombre: "",
		primerApellido: "",
		segundoApellido: "",
		localidad: "",
		telefono: "",
		tipoDocumento: "",
		documento: "",
		fechaNacimiento: "",
		tipoCita: ""
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		...formData,
		[name]: value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const datosBusq = {
		busqueda: {
			[dato.opcionSeleccionada]: dato.datoEnviado
		},
		};

		try {
		console.log(datosBusq);
		const response = await axios.post('http://localhost:3000/api/datoX', datosBusq);
		// Handle response here if needed
		} catch (error) {
		console.error("ERROR", error);
		}
		
		setDato({
		datoEnviado: "",
		opcionSeleccionada: ""
		});
	};

	const handleSave = async () => {
		try {
		const response = await axios.post('http://localhost:3000/api/guardarDatos', formData);
		alert('Datos guardados correctamente');
		// Clear form if needed
		} catch (error) {
		console.error("Error al guardar:", error);
		alert('Error al guardar los datos');
		}
	};

	return (
		<div className="relative min-h-screen bg-[#4187B5] flex justify-center items-center overflow-auto py-10">
		<div className="max-w-5xl w-full mx-auto bg-white rounded-lg shadow-xl border border-gray-200">
			<div className="p-6">
			<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sistema de Gestión de Citas</h2>
			
			{/* Barra de búsqueda */}
			<form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-8 pb-6 border-b-2 border-gray-200">
				<div className="flex-1">
				<select 
					className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					value={dato.opcionSeleccionada}
					onChange={(e) => setDato({ ...dato, opcionSeleccionada: e.target.value })}
				>
					<option value="">Opción a Buscar</option>
					<option value="cedula">Cédula</option>
					<option value="nombre">Nombre</option>
				</select>
				</div>
				<div className="flex-1">
				<input 
					type="text"
					name="datoEnviado"
					placeholder="Digita la búsqueda..."
					value={dato.datoEnviado} 
					onChange={(e) => setDato({ ...dato, datoEnviado: e.target.value })}
					className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
				/>
				</div>
				<div>
				<button 
					type="submit" 
					className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					Buscar
				</button>
				</div>
			</form>
			
			{/* Formulario */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-4">
				<div>
					<label htmlFor="primerNombre" className="block text-sm font-medium text-gray-700 mb-1">Primer Nombre</label>
					<input 
					type="text" 
					id="primerNombre"
					name="primerNombre"
					value={formData.primerNombre}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					/>
				</div>
				<div>
					<label htmlFor="primerApellido" className="block text-sm font-medium text-gray-700 mb-1">Primer Apellido</label>
					<input 
					type="text" 
					id="primerApellido"
					name="primerApellido"
					value={formData.primerApellido}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					/>
				</div>
				<div>
					<label htmlFor="localidad" className="block text-sm font-medium text-gray-700 mb-1">Localidad</label>
					<input 
					type="text" 
					id="localidad"
					name="localidad"
					value={formData.localidad}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					/>
				</div>
				<div>
					<label htmlFor="tipoDocumento" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Documento</label>
					<select 
					id="tipoDocumento"
					name="tipoDocumento"
					value={formData.tipoDocumento}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					>
					<option value="">Seleccione...</option>
					<option value="CC">Cédula de Ciudadanía</option>
					<option value="TI">Tarjeta de Identidad</option>
					<option value="CE">Cédula de Extranjería</option>
					<option value="PP">Pasaporte</option>
					</select>
				</div>
				<div>
					<label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento</label>
					<input 
					type="date" 
					id="fechaNacimiento"
					name="fechaNacimiento"
					value={formData.fechaNacimiento}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					/>
				</div>
				</div>
				
				<div className="space-y-4">
				<div>
					<label htmlFor="segundoNombre" className="block text-sm font-medium text-gray-700 mb-1">Segundo Nombre</label>
					<input 
					type="text" 
					id="segundoNombre"
					name="segundoNombre"
					value={formData.segundoNombre}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					/>
				</div>
				<div>
					<label htmlFor="segundoApellido" className="block text-sm font-medium text-gray-700 mb-1">Segundo Apellido</label>
					<input 
					type="text" 
					id="segundoApellido"
					name="segundoApellido"
					value={formData.segundoApellido}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					/>
				</div>
				<div>
					<label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Número de Teléfono</label>
					<input 
					type="tel" 
					id="telefono"
					name="telefono"
					value={formData.telefono}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					/>
				</div>
				<div>
					<label htmlFor="documento" className="block text-sm font-medium text-gray-700 mb-1">Documento</label>
					<input 
					type="text" 
					id="documento"
					name="documento"
					value={formData.documento}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					/>
				</div>
				<div>
					<label htmlFor="tipoCita" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Cita</label>
					<select 
					id="tipoCita"
					name="tipoCita"
					value={formData.tipoCita}
					onChange={handleInputChange}
					className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
					>
					<option value="">Seleccione...</option>
					<option value="medica">Médica</option>
					<option value="odontologica">Odontológica</option>
					<option value="especialista">Especialista</option>
					<option value="control">Control</option>
					</select>
				</div>
				</div>
				
				<div className="col-span-1 md:col-span-2 flex justify-center mt-6">
				<button 
					onClick={handleSave}
					className="px-10 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
				>
					GUARDAR
				</button>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
};

export default InicioOp;