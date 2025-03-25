import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModalOp from './ventanaModal/modalOP'
import api from '../../services/api'
import TicketCard from '../ticketCard/ticketCard'
import { guardarRespuesta } from '../../services/localStorage/respuestaStorage'


const FormCard = ({ modo = 'normal' }) => {
	// Hook para redireccionar a otras rutas
	const navigate = useNavigate()

	// Estado inicial del formulario con todos los campos vacíos
	const formInicial = {
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
	}

	// Estado del formulario
	const [form, setForm] = useState(formInicial)
	// Estado para controlar si el modal está abierto
	const [isOpen, setIsOpen] = useState(false)

	// Función para manejar los cambios en los inputs del formulario
	const handleChange = (e) => { 
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	// Función para validar que los campos obligatorios no estén vacíos
	const validarCamposRequeridos = () => {
		return (
			form.primerNombre.trim() !== '' &&
			form.primerApellido.trim() !== '' &&
			form.localidad.trim() !== '' &&
			form.numeroDocumento.trim() !== '' &&
			form.fechaNacimiento.trim() !== '' &&
			form.tipoDocumento.trim() !== '' &&
			form.numeroTelefono.trim() !== '' &&
			form.tipoDeCitas.trim() !== ''
		)
	}

	// Función que se ejecuta al enviar el formulario
	const handleSubmit = async (e) => {
		e.preventDefault() // Previene el comportamiento por defecto del formulario

		// Si los campos requeridos no están completos, muestra una alerta
		if (!validarCamposRequeridos()) {
			alert('Por favor, completa todos los campos requeridos.')
			return
		}

		setIsOpen(true)
	}
	const handleConfirm = async(e)=>{
		// Objeto con los datos formateados para enviar a la API
		const datos = {
			
				PrimerNombre: form.primerNombre,
				SegundoNombre: form.segundoNombre,
				PrimerApellido: form.primerApellido,
				SegundoApellido: form.segundoApellido,
				Localidad: form.localidad,
				NumeroDocumento: form.numeroDocumento,
				FechaNacimiento: form.fechaNacimiento,
				TipoDeDocumento_ID: form.tipoDocumento,
				NumeroTelefono: form.numeroTelefono,
				TipoDeCitas_ID: form.tipoDeCitas,	
			
	
		}
		try {
			console.log('Enviando datos:', JSON.stringify(datos, null, 2))
			// Simplifica la llamada al API
			const response = await api.post('/api/Envioform', datos)
			const respuesta = response.data
			//se guarda la respuesta del server dentro del localStorage
			guardarRespuesta(respuesta)
			console.log('Respuesta:', respuesta)
			setIsOpen(true)
		} catch (error) {
			console.error('Maldito Error al enviar debido a:', {
				message: error.message,
				status: error.response?.status,
				data: error.response?.data,
			})
		}
		
		setIsOpen(false) // Cierra el modal
		if (modo === 'op') {
			setForm(formInicial) // Reinicia el formulario
		} else {
			navigate('/ticket') // Redirige a la página de ticket
		}
	}
	

	return (
		<>
			<form
				className="bg-[#d9d9d9] border-[7px] border-[#3c3c3c] p-[0_15px] max-w-[320px] min-w-[350px] mx-auto
                sm:bg-[#d9d9d9] sm:border-[10px] sm:border-[#3c3c3c] sm:p-[0_30px] sm:w-[90%]  sm:min-w-[400px] sm:max-w-[500px]
                lg:bg-[#d9d9d9] lg:border-[12px] lg:border-[#3c3c3c] lg:p-[0_30px] lg:w-[90%] lg:min-w-[400px] lg:max-w-[400px]
                2xl:bg-[#d9d9d9] 2xl:border-[10px] 2xl:border-[#3c3c3c] 2xl:p-[0_30px] 2xl:w-[90%] 2xl:min-w-[400px] 2xl:max-w-[500px]"
				onSubmit={handleSubmit}
			>
				{/* Contenedor adicional para el formulario (rectángulo negro) */}
				<div
					className="relative w-[142px] h-[45px] left-[85px] mt-[-20px] bg-[#1E1E1E] rounded-[10px]
                sm:relative sm:w-[192px] sm:h-[45px] sm:left-[110px] sm:mt-[-20px]
                lg:relative lg:w-[180px] lg:h-[40px] lg:left-[70px] lg:mt-[-15px]
                2xl:relative 2xl:w-[192px] 2xl:h-[45px] 2xl:left-[110px] 2xl:mt-[-20px]"
				></div>

				{/* Título del formulario */}
				<h1
					className="text-center text-[17px] mt-[323] mb-[5px] font-extrabold tracking-[2.53px] leading-5.1
                sm:text-[23.1px] sm:mt-[10px] sm:mb-[10px] sm:font-extrabold sm:tracking-[4px] px-[10px] sm:leading-normal
                lg:text-[23px] lg:mt-[5px] lg:mb-[8px] lg:font-extrabold lg:tracking-[2px] lg:px-[20px] lg:leading-6
                2xl:text-[23.1px] 2xl:mt-[10px] 2xl:mb-[10px] 2xl:font-extrabold 2xl:tracking-[4px] 2xl:px-[10px] 2xl:leading-normal"
				>
					FORMULARIO DE REGISTRO
				</h1>

				{/* Contenedor de nombres */}
				<div className="flex gap-4">
					<div className="w-1/2">
						<label
							htmlFor="name"
							className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px] 2xl:text-[14px]"
						>
							Primer Nombre
						</label>
						<input
							className="text-[12.4px]  placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
                            2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px] focus:outline-none focus:shadow-none"
							type="text"
							name="primerNombre"
							value={form.primerNombre}
							onChange={handleChange}
							placeholder="Primer Nombre"
							autoComplete="off"
							required
						/>
					</div>

					<div className="w-1/2">
						<label
							className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px] 2xl:text-[14px]"
						>
							Segundo Nombre
						</label>
						<input
							className="text-[12.4px]  placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
                            2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px] focus:outline-none focus:shadow-none"
							type="text"
							name="segundoNombre"
							value={form.segundoNombre}
							onChange={handleChange}
							autoComplete="off"
							placeholder="Segundo Nombre"
						/>
					</div>
				</div>

				{/* Contenedor de apellidos */}
				<div className="flex gap-4 ">
					<div className="w-1/2">
						<label
							htmlFor="lastname"
							className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px] 2xl:text-[14px]"
						>
							Primer Apellido
						</label>
						<input
							className="text-[12.4px]  placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
                            2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px] focus:outline-none focus:shadow-none"
							type="text"
							name="primerApellido"
							value={form.primerApellido}
							onChange={handleChange}
							placeholder="Primer Apellido"
							autoComplete="off"
							required
						/>
					</div>

					<div className="w-1/2">
						<label
							className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px] 2xl:text-[14px]"
						>
							Segundo Apellido
						</label>
						<input
							className="text-[12.4px]  placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px _7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
                            2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px] focus:outline-none focus:shadow-none"
							type="text"
							name="segundoApellido"
							value={form.segundoApellido}
							onChange={handleChange}
							autoComplete="off"
							placeholder="Segundo Apellido"
						/>
					</div>
				</div>

				{/* Contenedor de Localidad y Teléfono */}
				<div className="flex gap-4">
					{/* Localidad */}
					<div className="w-1/2">
						<label
							className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px] 2xl:text-[14px]"
						>
							Localidad
						</label>
						<select
							name="localidad"
							value={form.localidad}
							onChange={handleChange}
							className="text-[12.4px]  placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
                            2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px] focus:outline-none focus:shadow-none"
							required
						>
							<option value="">Seleccione su localidad</option>
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

					{/* Número de Teléfono */}
					<div className="w-1/2">
						<label
							htmlFor="numeroTelefono"
							className="text-[12.5px] font-bold
                        sm:text-[14px] lg:text-[12px] 2xl:text-[14px]"
						>
							Número de Teléfono
						</label>
						<input
							type="tel"
							name="numeroTelefono"
							id="numeroTelefono"
							value={form.numeroTelefono}
							onChange={handleChange}
							placeholder="Número de Teléfono"
							pattern="[0-9]{10}"
							autoComplete="off"
							aria-label="Ingrese su número de teléfono"
							className="text-[12.4px]  placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                            sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                            lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
                            2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px] focus:outline-none focus:shadow-none"
							required
						/>
					</div>
				</div>

				{/* Campo para el TIPO DE DOCUMENTO */}
				<div className="mb-2">
					<label className="text-[12.5px] font-bold sm:text-[14px] lg:text-[12px]">
						Tipo de Documento
					</label>
					<select
						className="text-[12.4px] placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
	sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
	lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
	2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px]
	focus:outline-none focus:shadow-none"
						name="tipoDocumento"
						value={form.tipoDocumento}
						onChange={handleChange}
						required
					>
						<option value="" className="text-gray-400 text-[12.4px]">
							Seleccione un tipo
						</option>
						<option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
						<option value="Pasaporte">Pasaporte</option>
						<option value="Tarjeta de identidad">Tarjeta de identidad</option>
						<option value="Cédula de extranjería">Cédula de extranjería</option>
						<option value="Registro civil">Registro civil</option>
						<option value="Permiso especial de permanencia">
							Permiso especial de permanencia
						</option>
					</select>
				</div>

				{/* Campo para el documento */}
				<div>
					<label
						htmlFor="document"
						className="text-[12.5px] font-bold
                    sm:text-[14px] lg:text-[12px] 2xl:text-[14px]"
					>
						Documento
					</label>
					<input
						style={{
							WebkitAppearance: 'none',
							MozAppearance: 'textfield',
						}}
						className="text-[12.4px] placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
	sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
	lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
	2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px]
	focus:outline-none focus:shadow-none"
						type="number"
						name="numeroDocumento"
						value={form.numeroDocumento}
						onChange={handleChange}
						placeholder="Numero de Documento"
						autoComplete="off"
						required
					/>
				</div>

				{/* Campo para la fecha de nacimiento */}
				<div>
					<label
						htmlFor="document"
						className="text-[12.5px] font-bold
                    sm:text-[14px] lg:text-[12px] 2xl:text-[14px]"
					>
						Fecha de Nacimiento
					</label>
					<input
						className="text-[12.4px] placeholder:uppercase placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
                        sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
                        lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
                        2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px]
                        focus:outline-none focus:shadow-none"
						type="date"
						name="fechaNacimiento"
						value={form.fechaNacimiento}
						onChange={handleChange}
						required
					/>
				</div>

				{/* Campo para el TIPO DE CITA */}
				<div className="mb-3">
					<label
						htmlFor="tipoDeCitas"
						className="text-[12.5px] font-bold sm:text-[14px] lg:text-[12px]"
					>
						Tipo de Cita
					</label>
					<select
						name="tipoDeCitas"
						value={form.tipoDeCitas}
						onChange={handleChange}
						className="text-[12.4px] placeholder:text-[12.4px] w-[100%] p-[8px_6px] border-b-[1.6px] border-b-[#6EA3C7] bg-transparent
		sm:text-[13px] sm:w-full sm:p-[8px_7px] sm:mb-[5px] sm:border-b-[2px]
		lg:text-[12px] lg:w-full lg:p-[6px_5px] lg:border-b-[1.5px]
		2xl:text-[13px] 2xl:w-full 2xl:p-[8px_7px] 2xl:mb-[5px] 2xl:border-b-[2px]
		focus:outline-none focus:shadow-none"
						required
					>
						<option value="" disabled className="text-gray-400 text-[12.4px]">
							Seleccione un tipo
						</option>
						<option value="prioritaria">Prioritaria</option>
						<option value="no prioritaria">No prioritaria</option>
					</select>
				</div>

				{/* Botón de envío del formulario */}
				<button
					type="submit"
					className="bg-[#6EA3C7] text-[15px] font-bold cursor-pointer w-[90px] h-[35px] text-white mb-3 rounded-lg hover:bg-[#53709c] transition-colors mx-auto block
                    sm:w-[130px] sm:h-[40px] sm:mb-3 sm:rounded-lg
                    lg:w-[100px] lg:h-[30px] lg:text-[13px]
                    2xl:w-[130px] 2xl:h-[40px] 2xl:mb-3 2xl:rounded-lg"
					onClick={() => {
						if (validarCamposRequeridos()) {
							setIsOpen(true) // This opens the modal
						} else {
							alert('Por favor, completa todos los campos requeridos.')
						}
					}}
				>
					ENVIAR
				</button>
			</form>

			<ModalOp
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				onConfirm={handleConfirm}
			/>
		</>
	)
}

export default FormCard
